'use client';

import React, { useState } from 'react';
import '../../../styles/signup.css';
import { Form, Button, Typography, Radio, Checkbox } from 'antd';
import ErrorAlert from '../../../components/ErrorAlert';
import Image from 'next/image';
import { Images } from '@/lib/images';
import TextField from '../../../components/TextField';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { signupSchema } from '../../../schemas/auth';

const { Title, Text } = Typography;

const Signup = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await signupSchema.validate(values);
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
    <div className="signup-bg">
      <div className="signup-card">
        <div className="signup-logo">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <Title level={3} className="signup-title">
          Join Us
        </Title>
        <div className="signup-form-scroll">
          <Form
            name="signup"
            onFinish={handleSubmit}
            layout="vertical"
            className="signup-form"
            initialValues={{ email: '', password: '' }}
            requiredMark={false}
          >
            <TextField
              label="Name"
              name="name"
              required
              type="text"
              className="signup-input"
              placeholder="Enter your name"
              icon={<UserOutlined className="form-icon" />}
            />
            <TextField
              label="Email"
              name="email"
              required
              type="text"
              className="signup-input"
              placeholder="Enter your email"
              icon={<MailOutlined className="form-icon" />}
            />
            <TextField
              label="Username"
              name="username"
              required
              type="text"
              className="signup-input"
              placeholder="Enter your username"
              icon={<UserOutlined className="form-icon" />}
            />
            <TextField
              label="Password"
              name="password"
              required
              type="password"
              className="signup-input"
              placeholder="Enter your password"
              icon={<LockOutlined className="form-icon" />}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              required
              type="password"
              className="signup-input"
              placeholder="Enter Confirm password"
              icon={<LockOutlined className="form-icon" />}
            />

            <Form.Item
              label={
                <span className="input-label">
                  Select your profile <span className="require-mark">*</span>
                </span>
              }
              name="profile"
              className="signup-input"
            >
              <Radio.Group>
                <Radio value="user" style={{ color: '#FFF2E3' }}>
                  User
                </Radio>
                <Radio value="provider" style={{ color: '#FFF2E3' }}>
                  Provider
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="terms" valuePropName="checked" className="signup-input">
              <Checkbox>
                <span style={{ color: '#FFF2E3' }}>
                  Accept{' '}
                  <a href="#" className="signup-link">
                    terms & conditions
                  </a>
                </span>
              </Checkbox>
            </Form.Item>

            <ErrorAlert error={error} />

            <Form.Item>
              <Button htmlType="submit" className="signup-btn" block size="large">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Text className="signup-divider" style={{ color: '#fff2e3' }}>
          or sign in using
        </Text>
        <div className="signup-social">
          <Image src={Images.googleIcon} alt="Google Icon" width={24} height={24} unoptimized />
        </div>
        <div className="signup-signup">
          <Text style={{ color: '#FFF2E3' }}>
            Already have an account?{' '}
            <a className="signup-link" href="/auth/login">
              Log In
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Signup;
