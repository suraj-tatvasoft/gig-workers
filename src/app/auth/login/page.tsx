'use client';

import Image from 'next/image';
import { Images } from '@/lib/images';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/bg-img.jpg')" }}
    >
      <div className="bg-[#181820eb] rounded-3xl shadow-xl px-6 sm:px-10 py-10 sm:py-12 max-w-md w-full flex flex-col items-center">
        <div className="flex justify-center items-center mb-6">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <LoginForm />
        <div className="text-[#FFF2E3] mt-6 mb-3 text-center text-sm">or sign in using</div>
        <div className="flex justify-center mb-4">
          <Image src={Images.googleIcon} alt="Google Icon" width={36} height={36} className="cursor-pointer" unoptimized />
        </div>
        <div className="text-center text-[#FFF2E3] text-sm">
          Don&apos;t have an account?{' '}
          <a href="/auth/signup" className="font-medium underline text-[#FFF2E3]">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
