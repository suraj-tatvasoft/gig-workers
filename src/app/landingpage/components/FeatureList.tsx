import { AchievementIconSvg, DollarIconSvg, SafeIconSvg } from '@/components/icons';
import { Images } from '@/lib/images';
import Image from 'next/image';

function FeatureList() {
  return (
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
  );
}

export default FeatureList;
