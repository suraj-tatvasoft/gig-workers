import React from 'react';
import Image from 'next/image';
import { Images } from '@/lib/images';
import SignupForm from './SignupForm';
import Link from 'next/link';

const Signup = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-img.jpg')" }}
    >
      <div className="bg-[#181820eb] rounded-3xl shadow-xl px-10 py-12 max-w-md w-full flex flex-col items-center">
        <div className="flex justify-center items-center mb-3">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <SignupForm />
        <div className="text-center text-[#fff2e3] mt-6 mb-3">or sign in using</div>
        <div className="flex justify-center mb-4">
          <Image src={Images.googleIcon} alt="Google Icon" width={36} className="cursor-pointer" height={36} unoptimized />
        </div>
        <div className="text-center text-[#fff2e3]">
          Already have an account?{' '}
          <Link className="font-medium text-[#fff2e3] underline" href="/auth/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
