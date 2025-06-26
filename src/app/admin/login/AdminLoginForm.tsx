'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import TextField from '@/components/TextField';
import { loginSchema } from '@/schemas/auth';
import api from '@/services/api';
import { ADMIN_LOGIN_API_ENDPOINT } from '@/services/endpoints/admin';
import { toast } from 'react-toastify';

const { Title } = Typography;

export default function AdminLoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm();

  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setError(null);
      await loginSchema.validate(values, { abortEarly: false });
      const response = await api.post(ADMIN_LOGIN_API_ENDPOINT, values);
      if (response.status === 200 && response.data?.token) {
        form.resetFields();
        toast.success('Login successful!');

        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('adminAuthToken', response.data.token);
        localStorage.setItem('admin_profile', response.data.admin);

        router.push('/admin/dashboard');
      } else {
        toast.error('Unexpected response from server.');
      }
    } catch (err: any) {
      if (err.name === 'ValidationError' && err.inner) {
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
        const errorMessage = err?.response?.data?.message || err?.message || 'Something went wrong.';
        setError(errorMessage);
        toast.error(errorMessage);
      }
    }
  };

  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <span className="text-[#FFF2E3]">Admin Login</span>
      </Title>
      <Form
        form={form}
        name="login"
        onFinish={handleSubmit}
        layout="vertical"
        className="w-full"
        initialValues={{ email: '', password: '' }}
        requiredMark={false}
        onFieldsChange={() => {
          if (error) setError('');
        }}
      >
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

        <TextField
          label="Password"
          name="password"
          required
          type="password"
          placeholder="Enter your password"
          icon={<LockOutlined className="text-[#FFF2E3]" />}
          className="bg-transparent text-white border border-[#444] placeholder-white"
          labelClassName="text-[#FFF2E3]"
        />

        {error && <div className="text-red-400 text-sm text-start mb-3">{error}</div>}

        <Form.Item>
          <Button htmlType="submit" block size="large" className="mt-5 bg-[#635d57] text-[#FFF2E3] border-none shadow-none font-large">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
