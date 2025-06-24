'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form, Button, Typography } from 'antd';
import TextField from '@/components/TextField';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ErrorAlert from '@/components/ErrorAlert';
import { loginSchema } from '../../../schemas/auth';

const { Title } = Typography;

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await loginSchema.validate(values);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <>
      <Title level={3} className="login-title">
        Welcome back
      </Title>
      <Form
        name="login"
        onFinish={handleSubmit}
        layout="vertical"
        className="login-form"
        initialValues={{ email: '', password: '' }}
        requiredMark={false}
      >
        <TextField
          label="Username"
          name="username"
          required
          type="text"
          className="form-input"
          placeholder="Enter your username"
          icon={<UserOutlined className="form-icon" />}
        />

        <TextField
          label="Password"
          name="password"
          required
          type="password"
          className="form-input"
          placeholder="Enter your password"
          icon={<LockOutlined className="form-icon" />}
        />
        <ErrorAlert error={error} />
        <div className="password-label-row">
          <a className="forgot-link" href="#" style={{ fontSize: 13, color: '#FFF2E3' }}>
            Forgot password ?
          </a>
        </div>
        <Form.Item>
          <Button htmlType="submit" className="login-btn" block size="large">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
