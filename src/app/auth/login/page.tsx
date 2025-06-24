'use client';

import React, { useState } from 'react';
import '../../../styles/login.css';
import { Form, Button, Typography } from 'antd';
import ErrorAlert from '../../../components/ErrorAlert';
import Image from 'next/image';
import { Images } from '@/lib/images';
import TextField from '../../../components/TextField';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginSchema } from '../../../schemas/auth';

const { Title, Text } = Typography;

const Login = () => {
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
    <div className="login-bg">
      <div className="login-card">
        <div className="login-logo">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
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

        <Text className="login-divider" style={{ color: '#fff2e3' }}>
          or sign in using
        </Text>
        <div className="login-social">
          <Image src={Images.googleIcon} alt="Google Icon" width={24} height={24} unoptimized />
        </div>

        <div className="login-signup">
          <Text style={{ color: '#FFF2E3' }}>
            Don&apos;t have an account?{' '}
            <a className="login-link" href="/auth/signup">
              Sign up
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
