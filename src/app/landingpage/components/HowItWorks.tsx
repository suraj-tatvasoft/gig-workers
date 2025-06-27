import { DoubleDotIconSvg } from '@/components/icons';
import { steps } from '@/constants/LandingPage';
import { Images } from '@/lib/images';
import Image from 'next/image';

function HowItWorks() {
  return (
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

          <div className="flex flex-row justify-end items-end gap-4">
            <div className="flex flex-col gap-4">
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

            <div className="flex flex-col gap-4 self-end">
              <div className="flex justify-end rounded-md overflow-hidden">
                <Image src={Images.robot_image} alt="Robot Typing" width={249} height={207} className="object-cover" />
              </div>
              <div className="flex justify-end rounded-md overflow-hidden">
                <Image src={Images.man_image} alt="Man Standing" width={249} height={368} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
