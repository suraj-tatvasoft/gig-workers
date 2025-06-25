'use client';

import { Form, Button, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import TextField from '@/components/TextField';

export default function ResetPasswordForm() {
  const [form] = Form.useForm();
  const { Title } = Typography;


  return (
    <>
      <Title level={3} className="text-center mb-6 !text-2xl">
        <span className="text-[#FFF2E3]">Reset password</span>
      </Title>
      <Form name="resetpassword" form={form} layout="vertical" className="w-full" initialValues={{ email: '' }} requiredMark={false}>
        <TextField
            name="password"
            label="Password"
            required
            type="text"
            placeholder="Enter your password"
            icon={<LockOutlined className="text-[#FFF2E3]" />}
            className="bg-transparent text-white border border-[#444] placeholder-white"
            labelClassName="text-[#FFF2E3]"
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            required
            type="text"
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
