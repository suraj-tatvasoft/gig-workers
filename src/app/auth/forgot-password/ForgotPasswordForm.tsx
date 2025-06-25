'use client';

import { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import { LeftOutlined, MailOutlined } from '@ant-design/icons';
import TextField from '@/components/TextField';
import { forgotPasswordSchema } from '../../../schemas/auth';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();
  const { Title } = Typography;

  const handleSubmit = async (values: { email: string }) => {
    try {
      await forgotPasswordSchema.validate(values, { abortEarly: false });
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

  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <button
          type="button"
          onClick={() => router.push('/auth/login')}
          className="mr-2 focus:outline-none bg-transparent border-none p-0"
          aria-label="Back to login"
        >
          <LeftOutlined className="cursor-pointer" style={{ color: '#FFF2E3' }} />
        </button>
        <span className="text-[#FFF2E3]">Forgot password</span>
      </Title>
      <span className="text-[#9d9893] mb-6 text-center">No worries, we’ll send you an OTP to your mail id</span>
      <Form name="email" onFinish={handleSubmit} form={form} layout="vertical" className="w-full" initialValues={{ email: '' }} requiredMark={false}>
        <Form.Item name="email">
          <TextField
            name="email"
            label="Email"
            required
            type="text"
            placeholder="Enter your email"
            icon={<MailOutlined className="text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block size="large" className="bg-[#635d57] text-[#FFF2E3] border-none shadow-none font-large">
            Confirm
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center text-[#FFF2E3] text-sm">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={() => router.push('/auth/signup')}
          className="font-medium underline text-[#FFF2E3] bg-transparent border-none p-0 cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </>
  );
}
