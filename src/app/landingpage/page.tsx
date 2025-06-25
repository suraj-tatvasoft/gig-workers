'use client';
import { faqs, stats, steps, workOpportunities } from '@/lib/constant';
import {
  AchievementIconSvg,
  DollarIconSvg,
  DoubleDotIconSvg,
  FacebookIconSvg,
  InstagramIconSvg,
  LinkedInIconSvg,
  SafeIconSvg,
  SearchIconSvg,
  TwitterIconSvg,
} from '@/lib/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { Images } from '@/lib/images';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
});

function LandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

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
    <main className={`bg-[#111111] text-white w-full min-h-screen font-sans overflow-x-hidden ${inter.className}`}>
      <header className="bg-[#1D1D1D] w-full">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 py-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-[120px] aspect-[120/60] flex items-center justify-center">
              <Image src={Images.logo} alt="logo" fill className="object-contain object-center" />
            </div>
          </div>

          <div className="relative w-full max-w-md lg:w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#252525] text-sm text-[#676767] placeholder-[#676767] py-2 pl-10 pr-4 rounded-full w-full outline-none"
            />
            <SearchIconSvg className="absolute top-3 left-4 text-gray-400 text-sm" />
          </div>

          <nav className="w-full lg:w-1/3 flex justify-center lg:justify-end flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="text-[#FFF2E3] text-base">
              Find Work
            </Link>
            <Link href="#" className="text-[#FFF2E3] text-base">
              Contracts
            </Link>
            <Link href="/auth/login" className="text-[#FFF2E3] text-base">
              Login
            </Link>
            <Link href="/auth/signup" className="text-[#FFF2E3] text-base">
              Signup
            </Link>
          </nav>
        </div>
      </header>

      <section className="w-full bg-[#000000] py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-full sm:max-w-[50%] md:max-w-[50%] ml-auto text-center lg:text-left">
            <div className="text-sm text-[#ACAAA5] bg-[#0A0502] border border-[#191919] font-medium mb-2 px-2 py-1 max-w-max rounded-lg flex items-center">
              <span className="text-4xl text-orange-600"> · </span>&nbsp;
              <span>Freelance Marketplace</span>
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
            <div className="mt-4 text-yellow-400 text-sm sm:text-base">⭐⭐⭐⭐⭐ 4.8/5</div>
            <p className="text-[#383937] mb-6 text-sm sm:text-base">Trusted by 5,300+ customers</p>
          </div>
          <div className="mt-10 lg:mt-0 w-full max-w-sm">
            <Image src={Images.hero_image} alt="Hero" width={400} height={400} className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </section>

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

      <section className="w-full bg-[#111111] py-16">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="text-3xl font-semibold mb-2 flex items-center">
            <DoubleDotIconSvg />
            &nbsp;How it Works&nbsp;
            <DoubleDotIconSvg className="rotate-180" />
          </h2>
          <p className="text-sm text-[#A0A0A0] mb-8">Focusing on the positive experience of buying and selling in the marketplace.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1920px] mx-auto px-4 items-start">
            <ul className="place-self-center w-full max-w-full space-y-8 text-gray-300">
              {steps.map((step, i) => (
                <li key={i} className="bg-[#0A0502] rounded-br-2xl rounded-tr-2xl flex max-h-20 h-full">
                  <div
                    className="min-w-20 h-20 text-2xl rounded-md mr-4 font-bold bg-[#FFFFFF] flex justify-center items-center"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </div>
                  <div className="flex flex-col justify-evenly p-2">
                    <p className="text-sm sm:text-base md:text-lg text-[#CECECE] font-semibold">{step.title}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#A0A0A0] font-semibold">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex justify-end rounded-md overflow-hidden">
                  <Image src={Images.photographer_image} alt="Photographer" width={245} height={162} className="object-cover" />
                </div>
                <div className="flex justify-end rounded-md overflow-hidden">
                  <Image src={Images.meeting_image} alt="Team Working" width={334} height={229} className="object-cover" />
                </div>
                <div className="flex justify-end rounded-md overflow-hidden">
                  <Image src={Images.meeting_image_2} alt="Meeting" width={245} height={165} className="object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-md overflow-hidden">
                  <Image src={Images.robot_image} alt="Robot Typing" width={249} height={207} className="object-cover" />
                </div>
                <div className="rounded-md overflow-hidden">
                  <Image src={Images.man_image} alt="Man Standing" width={249} height={368} className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="w-full py-16 bg-[#111111] text-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full max-w-[845px] mx-auto aspect-[1076/716] border-none rounded-sm">
            <Image src={Images.laptop_girl_image} alt="Images.laptop_girl_image" fill className="object-contain" />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
              A whole world of freelance talent at your fingertips
            </h2>

            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start space-x-4">
                <AchievementIconSvg className="mt-1 min-w-[24px]" />
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white">Proof of quality</h3>
                  <p className="text-base sm:text-lg md:text-xl font-normal text-[#FFFFFF] mt-1">
                    Check any pro's work samples, client reviews, and identity verification.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <DollarIconSvg className="mt-1 min-w-[24px]" />
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white">No cost until you hire</h3>
                  <p className="text-base sm:text-lg md:text-xl font-normal text-[#FFFFFF] mt-1">
                    Check any pro's work samples, client reviews, and identity verification.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <SafeIconSvg className="mt-1 min-w-[24px]" />
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white">Safe and secure</h3>
                  <p className="text-base sm:text-lg md:text-xl font-normal text-[#FFFFFF] mt-1">
                    Check any pro's work samples, client reviews, and identity verification.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full px-10 py-16 text-center">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl mb-3 font-bold" style={dm_serif_display.style}>
            How are we Different?
          </h2>
          <div className="font-[500] mb-6 text-[#C7C7C7] text-sm">
            Why Us? Explore What Makes Our Design Platform Stand Out & Elevate Your Experience.
          </div>
          <div className="relative w-full max-w-[845] mx-auto aspect-[845/774]">
            <Image src={Images.how_it_works} alt="vein_diagram" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#111111] py-16">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center" style={dm_serif_display.style}>
            FAQs
          </h2>
          <div className="font-[500] mb-8 text-[#C7C7C7] text-sm text-center">
            Find answers to commonly asked questions about our Platform and Services
          </div>
          <div className="sm:max-w-[50%] max-w-full mx-auto space-y-4">
            {faqs.map((q, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className={`w-full text-left transition-colors duration-300 ${
                    openIndex === index ? 'bg-clip-text text-transparent' : 'text-[#FFFFFF]'
                  }`}
                  style={{
                    ...dm_serif_display.style,
                    backgroundImage:
                      openIndex === index
                        ? 'linear-gradient(271.26deg, #A8E5EC -32.48%, #1CBAE0 -6.29%, #6C98EE 19.89%, #AB9EF5 55.1%, #CF8CCC 88.51%, #FFB9C7 111.09%, #FFC29F 140.88%)'
                        : '',
                  }}
                >
                  <div className="flex justify-between items-center py-4 text-lg font-semibold border-b border-gray-700">
                    {q}
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-sm text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste eveniet exercitationem ipsum voluptates quod impedit assumenda
                    qui voluptatibus pariatur beatae, numquam inventore, esse sunt placeat consequatur rerum alias quibusdam.
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-semibold" style={dm_serif_display.style}>
              Still have questions?
            </h3>
            <p className="text-sm text-[#FFF2E3] mb-4">Contact our Support team for assistance</p>
            <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#A8E5EC] via-[#AB9EF5] to-[#FFC29F] inline-block">
              <button className="bg-[#111111] cursor-pointer text-[#FFF2E3] px-5 py-2 rounded-lg w-full h-full hover:bg-opacity-80 transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] text-white border-t-4 border-[#404040]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative w-[200px] aspect-[200/113] flex items-center justify-center">
                <Image src={Images.logo} alt="logo" fill className="object-contain object-center" />
              </div>
              <div className="relative w-full max-w-auto aspect-[130/22]">
                <Image src={Images.big_logo_icon} alt="logo" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">Your one stop marketplace for exclusive design resource</p>
          </div>

          <div>
            <h2
              className="bg-clip-text text-transparent font-semibold italic text-sm"
              style={{
                ...dm_serif_display.style,
                backgroundImage:
                  'linear-gradient(271.26deg, #A8E5EC -32.48%, #1CBAE0 -6.29%, #6C98EE 19.89%, #AB9EF5 55.1%, #CF8CCC 88.51%, #FFB9C7 111.09%, #FFC29F 140.88%)',
              }}
            >
              For User
            </h2>
            <div className="space-y-2 text-sm text-gray-300 flex flex-col">
              <Link href="#" className="font-inter">
                Post an Opportunity
              </Link>
              <Link href="#" className="font-inter">
                Project management
              </Link>
              <Link href="#" className="font-inter">
                Why us?
              </Link>
              <Link href="#" className="font-inter">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h2
              className="bg-clip-text text-transparent font-semibold italic text-sm"
              style={{
                ...dm_serif_display.style,
                backgroundImage:
                  'linear-gradient(271.26deg, #A8E5EC -32.48%, #1CBAE0 -6.29%, #6C98EE 19.89%, #AB9EF5 55.1%, #CF8CCC 88.51%, #FFB9C7 111.09%, #FFC29F 140.88%)',
              }}
            >
              For Provider
            </h2>
            <div className="space-y-2 text-sm text-gray-300 flex flex-col">
              <Link href="#" className="font-inter">
                Create a portfolio
              </Link>
              <Link href="#" className="font-inter">
                Freelancing
              </Link>
              <Link href="#" className="font-inter">
                Why us?
              </Link>
              <Link href="#" className="font-inter">
                FAQs
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-300 flex flex-col">
            <Link href="#" className="font-inter">
              Community
            </Link>
            <Link href="/about" className="font-inter">
              About us
            </Link>
            <Link href="#" className="font-inter">
              FAQs
            </Link>
            <Link href="#" className="font-inter">
              Contact us
            </Link>
          </div>
        </div>

        <div
          className="h-[2px] w-full max-w-[1920px] mx-auto"
          style={{
            background:
              'linear-gradient(271.26deg, #A8E5EC -32.48%, #1CBAE0 -6.29%, #6C98EE 19.89%, #AB9EF5 55.1%, #CF8CCC 88.51%, #FFB9C7 111.09%, #FFC29F 140.88%)',
          }}
        ></div>

        <div className="max-w-[1920px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="space-x-4">
            <Link href="#" className="font-inter">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="font-inter">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="font-inter">
              Code of conduct
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIconSvg />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIconSvg />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIconSvg />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIconSvg />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
