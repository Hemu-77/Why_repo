"use client";

import Image from "next/image";
import bg from "@/../public/header.png"; // background
import character from "@/../public/gautampointingtext 1.png"; // character
import { ChevronDown } from "lucide-react"; // arrow icon

export default function PortfolioSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
     [background:linear-gradient(to_bottom,black_40%,transparent_40%),linear-gradient(to_right,black_3%,transparent_20%),linear-gradient(to_left,black_3%,transparent_40%),radial-gradient(circle_at_top_left,black_20%,transparent_30%),radial-gradient(circle_at_top_right,black_10%,transparent_20%)]">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center z-10"
      />

      {/* 🔹 Right-side blur overlay */}
      <div className="absolute right-0 top-0 h-full w-3/4 backdrop-blur-[60px] -z-10"></div>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-between w-full max-w-7xl px-8 py-16 mt-2 z-20">
        {/* Left Content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-white text-[11rem] font-extrabold leading-none">
            Our <br /> Portfolio
          </h1>

          <p className="text-white/80 text-base leading-relaxed max-w-[28rem]">
            We start by really getting to know our clients, digging into what
            keeps them up at night. By listening carefully and asking the right
            questions, we uncover their pain points and challenges.
          </p>

          {/* Circles with text */}
          <div className="relative flex items-center justify-center ml-120 -mt-20">
  {/* Red solid circle */}
  <div className="w-50 h-50 rounded-full bg-red-500 -ml-30 -mt-12"></div>

  {/* Transparent outlined circle with blur and text */}
  <div className="absolute w-52 h-52 rounded-full border border-white/40 backdrop-blur-3xl flex items-center justify-center ml-34">
    {/* Center Arrow */}
    <ChevronDown className="w-6 h-6 text-white" />

    {/* Circular Text */}
    <span className="absolute text-sm text-white [writing-mode:vertical-rl] rotate-[120deg] tracking-[0.2em]">
      WE ARE HERE • WE ARE HERE • WE ARE HERE •
    </span>
  </div>
</div>


        </div>

        {/* Right side Character */}
        <div className="flex flex-col items-center space-y-6 -z-10 -ml-110 ">
          <h3 className="text-white font-black text-5xl pr-10 pt-35">
            EXPLORE ALL OUR PORTFOLIO
          </h3>
          <div className="relative w-[420px] h-[520px] ml-120">
            <Image
              src={character}
              alt="Character"
              fill
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>

      {/* Top Navigation Pills */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-4 mt-20 z-20">
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
