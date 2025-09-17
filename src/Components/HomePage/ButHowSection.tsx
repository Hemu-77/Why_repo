import React from "react";
import Image from "next/image";
import character from "../../../public/cirkitgautam 1.png"; // replace with your actual image

const HowSection = () => {
  return (
    <section className="relative bg-black text-white px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Character */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={character}
            alt="Character"
            className="w-[550px] lg:w-[1040px] object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 lg:text-left">
          {/* Title */}
          <h2 className="text-6xl lg:text-[10rem] font-black tracking-wide -ml-95 text-outline text-stroke">
            BUT <span className="text-red-500 outline-text">HOW ?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg font-semibold text-red-500 uppercase -ml-90 lg:text-[1.75rem]">
            BHAI NE BOLA KARNE KA, TO KARNE KA !!
          </p>

          {/* Buttons */}
          <div className="space-y-5">
            {[
              "STRATEGY FIRST",
              "CONVERSION COPY",
              "PRO-GRADE PRODUCTION",
              "CONTENT REPURPOSING",
            ].map((label, idx) => (
              <button
                key={idx}
                className="relative w-full lg:w-[550px] px-8 py-6 rounded-full font-black text-white uppercase shadow-lg overflow-hidden transition-transform hover:scale-105 text-2xl mt-2 -ml-50"
              >
                {/* Red gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"></span>

                {/* Diagonal stripes */}
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20"></span>

                {/* Gloss shine overlay */}
                <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-full mix-blend-overlay pointer-events-none"></span>

                {/* Button Label */}
                <span className="relative ">{label}</span>
              </button>
            ))}
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full">
  {/* Glow background */}
  <div className="absolute inset-0 flex items-center justify-center -mt-120 ml-90">
    <div className="w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.8)_0%,black_80%)]"></div>
  </div>

  {/* Play button */}
  <div className="relative z-10 w-26 h-26 rounded-full bg-red-500 border-4 border-white flex items-center justify-center  -mt-110 ml-90">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>

  {/* Label */}
  <p className="mt-6 text-white text-2xl font-medium z-10 ml-90">Play Sample</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default HowSection;
