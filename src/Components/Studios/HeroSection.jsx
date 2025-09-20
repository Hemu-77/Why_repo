"use client";

import Image from "next/image";
import character from "@/../public/Sitting.png";
import bg from "@/../public/header.png"; // 👈 import background

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
      h-[300px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Main content */}
      <div
        className="relative z-10 flex items-center w-full max-w-9xl pt-20 sm:pt-28 md:pt-32 lg:pt-40
        [background:linear-gradient(to_bottom,black_1%,transparent_20%),linear-gradient(to_right,black_1%,transparent_20%),linear-gradient(to_left,black_1%,transparent_20%),radial-gradient(circle_at_top_left,black_5%,transparent_30%),radial-gradient(circle_at_top_right,black_5%,transparent_20%)]"
      >
        {/* Studio text */}
        <h1
          className="relative font-black whitespace-nowrap -z-10 text-black/50 stroke-white
          text-9xl sm:text-7xl md:text-9xl lg:text-[25rem]
          ml-2 sm:ml-6 md:ml-12 lg:ml-35
          mt-2 sm:mt-6 md:mt-10 lg:mt-16"
        >
          Studio
        </h1>

        {/* Character image */}
        <div
          className="relative z-20 
          w-120 h-84 sm:w-80 sm:h-80 md:w-72 md:h-[420px]
          lg:w-full lg:h-[970px] mt-15
          -ml-95 sm:-ml-10 md:-ml-20 lg:-ml-255 lg:-mt-10"
        >
          <Image
            src={character}
            alt="Character"
            fill
            priority
            className="object-contain object-top lg:object-cover lg:mt-24 lg:pr-70 relative"
          />
        </div>
      </div>
    </section>
  );
}
