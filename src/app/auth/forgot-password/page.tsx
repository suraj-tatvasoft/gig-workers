'use client';

import Image from 'next/image';
import { Images } from '@/lib/images';
import TextField from '@/components/TextField';
import { LeftOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Button, Typography } from 'antd';
import { forgotPasswordSchema } from '../../../schemas/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);
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
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/bg-img.jpg')" }}
    >
      <div className="bg-[#181820eb] rounded-3xl shadow-xl px-6 sm:px-10 py-10 sm:py-12 max-w-md w-full flex flex-col items-center">
        <div className="flex justify-center items-center mb-6">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
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
        <Form
          name="email"
          onFinish={handleSubmit}
          form={form}
          layout="vertical"
          className="w-full"
          initialValues={{ email: '' }}
          requiredMark={false}
        >
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
      </div>
    </div>
  );
}
