import { Images } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
  return (
    <section className="w-full bg-[#000000] py-20">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-full sm:max-w-[50%] md:max-w-[50%] ml-auto text-center lg:text-left">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#ACAAA5] bg-[#0A0502] border border-[#191919] font-medium mb-2 px-2 py-1 max-w-max rounded-lg flex items-center">
              <span className="text-4xl text-orange-600"> · </span>&nbsp;
              <span>Freelance Marketplace</span>
            </div>
            <div className="relative w-[165px] aspect-[165/60] flex items-center justify-center">
              <Image src={Images.round_arrow} alt="round_arrow" fill className="object-contain object-center" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-4">
            On-Demand <span className="text-[#FFB9C7]">Services</span> for Your Every Need
          </h1>
          <p className="text-[#383937] mb-6 text-sm sm:text-base">
            We pride ourselves on offering a seamless, secure, and efficient experience. Browse through thousands of trusted service providers, read
            reviews, compare prices.
          </p>
          <Link href="#" className="font-inter">
            <div className="p-[1px] rounded-lg bg-[linear-gradient(45deg,_#20cbff,_#bd9ef5,_#FFC29F)] inline-block">
              <button className="cursor-pointer text-[#FFFFFF] px-5 py-2 rounded-lg w-full h-full hover:bg-opacity-80 transition">
                Explore Gigs
              </button>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="relative w-[109px] aspect-[109/40] flex items-center justify-center mr-2">
              <Image src={Images.reviewers_image} alt="reviewers_image" fill className="object-contain object-center" />
            </div>
            <div>
              <div className="mt-4 text-yellow-400 text-sm sm:text-base">⭐⭐⭐⭐⭐ 4.8/5</div>
              <p className="text-[#383937] mb-6 text-sm sm:text-base">Trusted by 5,300+ customers</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 w-full max-w-sm">
          <Image src={Images.hero_image} alt="Hero" width={400} height={400} className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
