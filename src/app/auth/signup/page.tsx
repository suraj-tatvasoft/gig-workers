import React from 'react';
import Image from 'next/image';
import { Images } from '@/lib/images';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-img.jpg')" }}
    >
      <div className="bg-[#181820eb] rounded-3xl shadow-xl px-8 py-8 max-w-md w-full flex flex-col items-center ">
        <div className="flex justify-center items-center mb-3">
          <Image src={Images.logo} alt="Company Logo" width={80} height={80} priority />
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
