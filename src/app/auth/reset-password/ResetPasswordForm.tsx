'use client';

import { Form, Button, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import TextField from '@/components/TextField';
import { useState } from 'react';
import { resetPasswordSchema } from '@/schemas/auth';

export default function ResetPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();
  const { Title } = Typography;

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setError(null);
      await resetPasswordSchema.validate(values, { abortEarly: false });
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const formErrors = err.inner.reduce((acc: any, curr: any) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});

        form.setFields(
          Object.entries(formErrors).map(([name, message]) => ({
            name,
            errors: [message as string],
          })),
        );
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <span className="text-[#FFF2E3]">Reset password</span>
      </Title>
      <Form
        name="resetpassword"
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="w-full"
        initialValues={{ password: '', confirmPassword: '' }}
        requiredMark={false}
        onFieldsChange={() => {
          if (error) setError('');
        }}
      >
        <TextField
          name="password"
          label="Password"
          required
          type="password"
          placeholder="Enter your password"
          icon={<LockOutlined className="text-[#FFF2E3]" />}
          className="bg-transparent text-white border border-[#444] placeholder-white"
          labelClassName="text-[#FFF2E3]"
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          required
          type="password"
          placeholder="Enter your confirm password"
          icon={<LockOutlined className="text-[#FFF2E3]" />}
          className="bg-transparent text-white border border-[#444] placeholder-white"
          labelClassName="text-[#FFF2E3]"
        />
        <Form.Item>
          <Button htmlType="submit" block size="large" className="bg-[#635d57] mt-5 text-[#FFF2E3] border-none shadow-none font-large">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
