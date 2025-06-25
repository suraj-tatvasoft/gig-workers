'use client';

import { useEffect, useState } from 'react';
import { Form, Button, Typography } from 'antd';
import { LeftOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import TextField from '@/components/TextField';
import { verifyOtpSchema } from '../../../schemas/auth';
import { useRouter } from 'next/navigation';

export default function VerifyOtpForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [canResend, setCanResend] = useState(false);
  const [form] = Form.useForm();
  const [timer, setTimer] = useState(60);
  const { Title } = Typography;

  const handleSubmit = async (values: { email: string }) => {
    try {
      await verifyOtpSchema.validate(values, { abortEarly: false });
      setError(null);
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const fieldErrors = err.inner.map((e: any) => ({
          name: e.path,
          errors: [e.message],
        }));
        form.setFields(fieldErrors);
      } else {
        setError('Something went wrong');
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
  };

  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <button
          type="button"
          onClick={() => router.push('/auth/forgot-password')}
          className="mr-2 focus:outline-none bg-transparent border-none p-0"
          aria-label="Back to login"
        >
          <LeftOutlined className="cursor-pointer" style={{ color: '#FFF2E3' }} />
        </button>
        <span className="text-[#FFF2E3]">Verify OTP</span>
      </Title>
      <span className="text-[#9d9893] mb-6 text-center">Kindly enter the confirmation code sent to the following email: xyz@gmail.com</span>
      <Form name="otp" onFinish={handleSubmit} form={form} layout="vertical" className="w-full" initialValues={{ otp: '' }} requiredMark={false}>
        <Form.Item name="otp" className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="otp" className="font-medium text-[#FFF2E3]">
              OTP <span className="text-red-500">*</span>
            </label>
            <span className="text-sm">
              {canResend ? (
                <Button type="link" className="p-0 m-0 text-[#FFF2E3] underline font-medium" onClick={handleResend} disabled={!canResend}>
                  Resend OTP
                </Button>
              ) : (
                <span className="text-[#9d9893]">Resend OTP in {timer}s</span>
              )}
            </span>
          </div>
          <TextField
            name="otp"
            required
            type="text"
            placeholder="Enter your otp"
            icon={<LockOutlined className="text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            label={''}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block size="large" className="bg-[#635d57] text-[#FFF2E3] border-none shadow-none font-large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
