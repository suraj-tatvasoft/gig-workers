import { dm_serif_display } from '@/lib/fonts';
import { Images } from '@/lib/images';
import Image from 'next/image';

function HowWeDifferent() {
  return (
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
  );
}

export default HowWeDifferent;
