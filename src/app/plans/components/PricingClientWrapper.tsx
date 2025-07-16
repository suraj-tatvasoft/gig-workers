'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/lib/toast';
import { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import type { OnApproveData } from '@paypal/paypal-js';
import PlanCard from '@/components/PlanCard';
import { PRIVATE_API_ROUTES, PRIVATE_ROUTE } from '@/constants/app-routes';
import { ApiResponse } from '@/types/shared/api-response';
import { ISafeActiveSubscription, ISafePlan, ISafeSubscription } from '@/types/fe/api-responses';
import { PAYPAL_BUTTON_CONFIG } from '@/constants';
import { FREE_PLAN_ID } from '@/constants/plans';
import Loader from '@/components/Loader';
import CommonModal from '@/components/CommonModal';
import { createSubscription } from '@/services/subscription.services';
import apiService from '@/services/api';

interface PricingClientWrapperProps {
  activeSubscription: ISafeActiveSubscription | null;
  plans: ISafePlan[];
}

type PayPalSubscriptionActions = {
  subscription: {
    create: (data: { plan_id: string; custom_id?: string }) => Promise<string>;
  };
};

type SessionUpdatePayload = {
    message: string;
    subscription: string;
};

const PricingClientWrapper = ({
  plans,
  activeSubscription
}: PricingClientWrapperProps) => {
  const router = useRouter();
  const { update, data: session } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<ISafePlan | null>(null);

  const navigateToDashboard = () => {
    router.push(PRIVATE_ROUTE.DASHBOARD);
  };

  const handleCloseDialog = (isOpen?: boolean) => {
    setIsDialogOpen(isOpen || false);
    setSelectedPlan(null);
  };

  const handleCreateFreeSubscription = async (planId: string) => {
    try {
      setIsLoading(true);
      const response = await createSubscription(null, planId);
      await update({ 
        subscription: response.data?.subscription.type,
        role: response.data?.user.role
      });
      toast.success(response.message);
      navigateToDashboard();
    } catch (err) {
      const error = err as AxiosError<ApiResponse<null>>;
      const apiErrorMessage = error?.response?.data?.error?.message || error?.message || 'Something went wrong.';
      toast.error(apiErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChoosePlan = (plan: ISafePlan) => {
    if (plan.plan_id === FREE_PLAN_ID) {
      handleCreateFreeSubscription(plan.plan_id);
    } else {
      setSelectedPlan(plan);
      setIsDialogOpen(true);
    }
  };

  const handleSubscriptionCreate = async (_data: Record<string, unknown>, actions: PayPalSubscriptionActions): Promise<string> => {
    try {
      if (!selectedPlan) {
        throw new Error('No plan selected for subscription.');
      }

      const requestPayload = {
        plan_id: selectedPlan.plan_id,
        custom_id: session?.user?.id
      };
      const subscriptionId = await actions.subscription.create(requestPayload);
      return subscriptionId;
    } catch (error) {
      throw new Error('Failed to initiate subscription. Please try again.');
    }
  };

  const handleSubscriptionApprove = async (data: OnApproveData): Promise<void> => {
    setIsDialogOpen(false);
    if (!data.subscriptionID || !selectedPlan) {
      throw new Error('Something went wrong! Try again later');
    }

    try {
      setIsLoading(true);
      const response = await createSubscription(data.subscriptionID, selectedPlan.plan_id);
      await update({
        subscription: response.data?.subscription.type,
        role: response.data?.user.role
      });
      toast.success(response.message);
      setIsDialogOpen(false);
      navigateToDashboard();
    } catch (err) {
      const error = err as AxiosError<ApiResponse<null>>;
      const apiErrorMessage = error?.response?.data?.error?.message || error?.message || 'Something went wrong.';
      toast.error(apiErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscriptionError = (error: any) => {
    const errorMessage = error.message || '';
    setIsDialogOpen(false);
    if (errorMessage.includes('popup close')) return;

    if (errorMessage.includes('INSTRUMENT_DECLINED') || errorMessage.includes('payment_method_error')) {
      toast.error('Your payment method was declined. Please try another.');
    } else if (
      errorMessage.includes('unsupported') ||
      errorMessage.includes('currency_not_supported') ||
      errorMessage.includes('country_not_supported')
    ) {
      toast.error('This payment option is not supported. Please choose a different one.');
    } else if (
      errorMessage.includes('INVALID_REQUEST') ||
      errorMessage.includes('system_config_error') ||
      errorMessage.includes('invalid_payment_method')
    ) {
      toast.error('There was a configuration issue. Contact support.');
    } else {
      toast.error('An unexpected error occurred. Please try again later.');
      console.error('[PayPal Unknown Error]', error);
    }
  };

  return (
    <div className="flex w-full flex-wrap justify-center gap-8">
      <Loader isLoading={isLoading} />
      {plans.map((plan) => (
        <PlanCard
          key={plan.plan_id}
          plan={plan}
          activePlanId={activeSubscription?.plan_id || undefined}
          onChoosePlan={() => handleChoosePlan(plan)}
        />
      ))}

      <CommonModal open={isDialogOpen} onOpenChange={handleCloseDialog} className="py-6" title={`Subscribe to the ${selectedPlan?.name} plan?`}>
        <div className="mt-8">
          {selectedPlan && (
            <div className="flex flex-col gap-3 p-3">
              <PayPalButtons
                style={PAYPAL_BUTTON_CONFIG}
                fundingSource={FUNDING.PAYPAL}
                forceReRender={[selectedPlan.plan_id]}
                createSubscription={handleSubscriptionCreate}
                onApprove={handleSubscriptionApprove}
                onError={handleSubscriptionError}
              />
              <PayPalButtons
                fundingSource={FUNDING.CARD}
                style={PAYPAL_BUTTON_CONFIG}
                forceReRender={[selectedPlan.plan_id]}
                createSubscription={handleSubscriptionCreate}
                onApprove={handleSubscriptionApprove}
                onError={handleSubscriptionError}
              />
            </div>
          )}
        </div>
      </CommonModal>
    </div>
  );
};

export default PricingClientWrapper;
