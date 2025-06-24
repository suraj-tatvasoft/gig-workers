import Image from 'next/image';
import { Images } from '@/lib/images';
import LoginForm from './LoginForm';
import { Typography } from 'antd';

import '../../../styles/login.css';

export default function LoginPage() {
  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-logo">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <LoginForm />
        <Typography className="login-divider" style={{ color: '#fff2e3' }}>
          or sign in using
        </Typography>
        <div className="login-social">
          <Image src={Images.googleIcon} alt="Google Icon" width={24} height={24} unoptimized />
        </div>
        <div className="login-signup">
          <Typography style={{ color: '#FFF2E3' }}>
            Don&apos;t have an account?{' '}
            <a className="login-link" href="/auth/signup">
              Sign up
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}
