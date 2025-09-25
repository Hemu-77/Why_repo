"use client";

import Image from "next/image";
import bg from "@/../public/header.png";
import character from "@/../public/gautampointingtext 1.png";
import { ChevronDown } from "lucide-react";
import { Outfit } from "next/font/google";

const ptMono = Outfit({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });
  

export default function PortfolioSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start md:justify-center overflow-visible py-5 mb-10 ">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center z-10"
      />

      {/* 🔹 Right-side blur overlay (visible on medium and larger screens) */}
      <div className="absolute right-0 top-0 h-full w-3/4 backdrop-blur-[60px] -z-10 hidden md:block"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 py-8 md:py-16 mt-25 z-20">

        {/* Top Navigation Pills (moved here for mobile) */}
        {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4 z-20 md:hidden">
          <span className="px-4 py-1 md:px-6 md:py-2 rounded-full bg-red-500 text-white font-medium text-sm">
            Portfolio
          </span>
          <span className="px-4 py-1 md:px-6 md:py-2 rounded-full bg-black/40 backdrop-blur-lg text-white text-sm">
            Case Studies
          </span>
          <span className="px-4 py-1 md:px-6 md:py-2 rounded-full bg-black/40 backdrop-blur-lg text-white text-sm">
            Gallery
          </span>
        </div> */}

        {/* Left Content */}
        <div className="flex flex-col space-y-4 md:space-y-6 pt-12 md:pt-0 z-10">
          <h1 className="text-white text-7xl md:text-[11rem] font-extrabold leading-none">
            Our <br /> Portfolio
          </h1>

          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[28rem]">
            We start by really getting to know our clients, digging into what
            keeps them up at night. By listening carefully and asking the right
            questions, we uncover their pain points and challenges.
          </p>

          {/* Circles with text */}
          <div className="relative lg:flex hidden items-center justify-center -ml-20 mt-4 md:ml-20 md:-mt-20 lg:ml-120">
            {/* Red solid circle */}
            <div className="w-20 h-20 md:w-50 md:h-50 rounded-full bg-red-500 -ml-12 -mt-6 md:-ml-30 md:-mt-12"></div>

            {/* Transparent outlined circle with blur and text */}
            <div className="absolute w-32 h-32 md:w-52 md:h-52 rounded-full border border-white/40 backdrop-blur-3xl flex items-center justify-center ml-20 md:ml-34">
              {/* Center Arrow */}
              <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white" />

              {/* Circular Text */}
              <span className="absolute text-[0.5rem] md:text-sm text-white [writing-mode:vertical-rl] rotate-[120deg] tracking-[0.2em]">
                WE ARE HERE • WE ARE HERE • WE ARE HERE •
              </span>
            </div>
          </div>
        </div>

        {/* Right side Character */}
        <div className="flex flex-col h-[1000px] w-screen rounded-4xl items-center space-y-4 md:space-y-6 -mb-120 md:mt-0 -ml-90 pl-10 backdrop overflow-visible ">
          <h3 className={`relative text-white font-bold text-2xl md:text-5xl pr-0 md:pr-10  md:pt-35 lg:text-[48px] lg:-ml-80px lg:-mt-25 ${ptMono.className}`}>
            EXPLORE ALL OUR PORTFOLIO
          </h3>
          <div className="relative w-[280px] h-[350px] md:w-[420px] md:h-[520px]  ml-60 lg:mt-0 lg:-mr-10 overflow-visible">
            <Image
              src={character}
              alt="Character"
              fill
              className="object-contain z-20"
              priority
            />
          </div>
        </div>
      </div>

      {/* Top Navigation Pills (visible on medium and larger screens) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 gap-4 mt-30 lg:mt-20 z-20 lg:flex hidden md:block mb-30">
  <span className="px-6 py-2 rounded-full bg-red-500 text-white font-medium">
    Portfolio
  </span>
  <span className="px-6 py-2 rounded-full bg-black/40 backdrop-blur-lg text-white">
    Case Studies
  </span>
  <span className="px-6 py-2 rounded-full bg-black/40 backdrop-blur-lg text-white">
    Gallery
  </span>
</div>

      </section>
  );
}