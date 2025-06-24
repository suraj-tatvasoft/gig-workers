import React from 'react';
import '../../../styles/signup.css';
import { Typography } from 'antd';
import Image from 'next/image';
import { Images } from '@/lib/images';
import SignupForm from './SignupForm';

const Signup = () => {

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <div className="signup-logo">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <SignupForm />
        <Typography className="signup-divider" style={{ color: '#fff2e3' }}>
          or sign in using
        </Typography>
        <div className="signup-social">
          <Image src={Images.googleIcon} alt="Google Icon" width={24} height={24} unoptimized />
        </div>
        <div className="signup-signup">
          <Typography style={{ color: '#FFF2E3' }}>
            Already have an account?{' '}
            <a className="signup-link" href="/auth/login">
              Log In
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Signup;
