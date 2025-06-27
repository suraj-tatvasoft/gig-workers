'use client';
import { useEffect, useRef } from 'react';
import { workOpportunities } from '@/constants/LandingPage';
import { Images } from '@/lib/images';
import Image from 'next/image';

function WorkOpportunities() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollStep = () => {
      if (!el) return;
      el.scrollBy({ left: 1, behavior: 'smooth' });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: 'auto' });
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 py-16">
      <h2 className="text-3xl font-[700] mb-6 text-[#FFF2E3]">Work Opportunities</h2>
      <p className="text-xs mb-4 text-[#FFF2E3] underline text-right">View more</p>
      <div className="relative">
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {workOpportunities.map((item, i) => (
            <div key={i} className="min-w-[300px] sm:min-w-[320px] bg-transparent p-5 rounded-xl border border-[#3E3E3E]">
              <h3 className="text-lg font-[600] mb-1 text-[#FFF2E3]">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-2">
                <span className="rounded-3xl bg-[#1D1D1D] text-[#1CBAE0] px-2 py-1 mr-2">{item.price}</span>
                <span className="rounded-3xl bg-[#1D1D1D] text-[#FFB9C7] px-2 py-1">{item.duration}</span>
              </p>
              <p className="text-xs text-[#FFF2E3] mt-2">{item.description}</p>
              <div className="mt-2 text-sm text-gray-300 border-t border-[#3E3E3E] py-3 flex justify-between items-center">
                <div className="flex w-1/2">
                  <Image src={Images.avatar} alt="vein_diagram" height={44} width={44} className="mr-2" />
                  <div>
                    <div className="text-sm text-[#FFF2E3]">{item.provider}</div>
                    <div className="text-xs text-[#FFF2E3] mt-2">{item.place}</div>
                  </div>
                </div>
                <p className="text-[#66625C] text-xs w-1/2 text-right">{item.postTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkOpportunities;
