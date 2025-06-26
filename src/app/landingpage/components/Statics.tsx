import { stats } from '@/lib/constants/Home';
import React from 'react';

function Statics() {
  return (
    <section className="w-full mx-auto max-w-[1920px] border border-[#FFFFFF] rounded-lg bg-[#111111]">
      <div className=" px-10 py-10 grid grid-cols-2 md:grid-cols-4 text-center">
        {stats.map(([value, label], i) => (
          <div key={i} className="text-xl">
            <div className="text-3xl font-bold text-[#FFFFFF]">{value}</div>
            <div className="text-[#FFFFFF] text-sm">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statics;
