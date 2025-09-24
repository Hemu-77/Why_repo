import React from "react";
import Image from "next/image";
import character from "../../../public/cirkitgautam 1.png";


const HowSection = () => {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Character */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={character}
            alt="Character"
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[1040px] object-contain -ml-15 "
            priority
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center lg:text-left relative ">
          {/* Title */}
          <h2 className="text-6xl sm:text-5xl md:text-6xl lg:text-[10rem] font-black tracking-wide lg:-ml-95">
  <span className="gradient-stroke">BUT HOW ?</span>
</h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] font-semibold text-red-500 uppercase lg:-ml-90">
            <span className="gradient-strokes">BHAI NE BOLA KARNE KA, TO KARNE KA !!</span>
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
                className="relative w-full sm:w-[350px] md:w-[450px] lg:w-[550px] px-6 sm:px-8 py-4 sm:py-6 rounded-full font-black text-white uppercase shadow-lg overflow-hidden transition-transform hover:scale-105 text-lg sm:text-xl lg:text-2xl mt-2 lg:-ml-50"
              >
                {/* Red gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"></span>

                {/* Diagonal stripes */}
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20"></span>

                {/* Gloss shine overlay */}
                <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-full mix-blend-overlay pointer-events-none"></span>

                {/* Button Label */}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>

          {/* Play Sample */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Glow background */}
            <div className="absolute inset-0 flex items-center justify-center lg:-mt-110 lg:ml-90">
              <div className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[150px] sm:h-[200px] md:h-[220px] lg:h-[250px] rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.8)_0%,black_80%)]"></div>
            </div>

            {/* Play button */}
            <div className="relative z-10 w-16 -pt-10 sm:w-20 md:w-24 lg:w-26 h-16 sm:h-20 md:h-24 lg:h-26 rounded-full bg-red-500 border-4 border-white flex items-center justify-center lg:-mt-110 lg:ml-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Label */}
            {/* <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium z-10 lg:ml-90">
              Play Sample
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
