
"use client";

import Image from "next/image";
import bg from "@/../public/header.png";
import { Public_Sans } from "next/font/google";
import Sitting from "@/../public/sittingRight.png"



const publicSans = Public_Sans({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap",
  });



const CaseStudySection = () => {
    return (
        <section className="flex flex-row items-center justify-center relative h-[90vh] px-10 overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none"></div>
          {/* Text */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <h1 className={`text-[200px] stroke-blur ${publicSans.className} leading-[1.1]`}>
              Case Studies
            </h1>
          </div>
      
          {/* Sitting Image */}
          <div className="flex-1 flex items-center justify-center w-full z-10 h-[90vh]">
  <Image
    src={Sitting}
    alt="Sitting"
    className="object-contain w-full max-w-[1800px] lg:max-w-[2200px] pt-45"
  />
</div>

          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
        </section>
      );
      
};




export default CaseStudySection