'use client';

import React from 'react';
import { Form, Input } from 'antd';

interface TextFieldProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  icon?: React.ReactNode;
  size?: 'large' | 'middle' | 'small';
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  required = false,
  placeholder,
  type = 'text',
  icon,
  size = 'large',
  className = 'form-input',
}) => {
  const InputComponent = type === 'password' ? Input.Password : Input;

  return (
    <Form.Item
      label={
        <span className="input-label">
          {label} {required && <span className="require-mark">*</span>}
        </span>
      }
      name={name}
    >
      <InputComponent prefix={icon} placeholder={placeholder} size={size} className={className} />
    </Form.Item>
  );
};

export default TextField;
