'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form, Button, Typography, Checkbox, Radio } from 'antd';
import TextField from '@/components/TextField';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import ErrorAlert from '@/components/ErrorAlert';
import { signupSchema } from '../../../schemas/auth';

const { Title } = Typography;

export default function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: any) => {
    try {
      await signupSchema.validate(values, { abortEarly: true });
      setError(null);
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <Title level={3} className="signup-title">
        Join Us
      </Title>
      <div className="signup-form-scroll">
        <Form
          name="signup"
          onFinish={handleSubmit}
          layout="vertical"
          className="signup-form"
          initialValues={{
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            profile: '',
            terms: false,
          }}
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
    </>
  );
}
