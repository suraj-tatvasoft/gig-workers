import { listSubscriptionPlans } from '@/lib/paypal/plans';
import { NextResponse } from 'next/server';

export async function GET(_req: Request) {
  try {
    const plans = await listSubscriptionPlans();
    return NextResponse.json({ success: true, data: plans, message: 'Subscription plans fetched successfully' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
