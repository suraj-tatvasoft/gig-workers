'use client';

import { useState } from 'react';
import { Form, Button, Typography, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { signupSchema } from '../../../schemas/auth';
import TextField from '@/components/TextField';

const { Title } = Typography;
interface SignupFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export default function SignupForm() {
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: SignupFormValues) => {
    try {
      await signupSchema.validate(values, { abortEarly: false });
      setError(null);
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const fieldErrors = err.inner.map((e: any) => ({
          name: e.path,
          errors: [e.message],
        }));
        form.setFields(fieldErrors);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <span className="text-[#FFF2E3]">Join Us</span>
      </Title>
      <div className="w-full max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <Form
          form={form}
          name="signup"
          onFinish={handleSubmit}
          layout="vertical"
          className="w-full"
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
          }}
          requiredMark={false}
        >
          <TextField
            name="firstname"
            label="Firstname"
            required
            type="text"
            placeholder="Enter your firstname"
            icon={<UserOutlined className="text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />

          <TextField
            name="lastname"
            label="Lastname"
            required
            type="text"
            placeholder="Enter your lastname"
            icon={<UserOutlined className="text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />

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
            name="password"
            label="Password"
            required
            type="password"
            placeholder="Enter your password"
            icon={<LockOutlined className="text-[#FFF2E3] !text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />

          <TextField
            name="confirmPassword"
            label="Confirm Password"
            required
            type="password"
            placeholder="Enter Confirm password"
            icon={<LockOutlined className="text-[#FFF2E3] !text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />

          <Form.Item name="terms" valuePropName="checked" rules={[{ required: true, message: 'You must accept the terms and conditions' }]}>
            <Checkbox>
              <span className="text-[#FFF2E3] !text-[#FFF2E3]">
                Accept{' '}
                <a href="#" className="underline font-medium text-[#FFF2E3] !text-[#FFF2E3]">
                  terms & conditions
                </a>
              </span>
            </Checkbox>
          </Form.Item>
          <Button htmlType="submit" block size="large" className="mt-5 bg-[#635d57] text-[#FFF2E3] font-bold w-full  border-none shadow-none">
            Sign up
          </Button>
        </Form>
      </div>
    </>
  );
}
