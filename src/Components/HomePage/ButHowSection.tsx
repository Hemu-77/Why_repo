"use client";

import React from "react";
import Image from "next/image";
import character from "../../../public/cirkitgautam 1.png";

const HowSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center py-12 lg:py-0">
      <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-0 w-full max-w-[1400px] px-6 lg:px-12">
        {/* Left Character */}
        <div className="flex-shrink-0 lg:w-full flex justify-center lg:justify-start">
          <Image
            src={character}
            alt="Character"
            width={650}
            height={650}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 absolute top-10 left-1/3 flex flex-col gap-6 lg:gap-4 lg:pl-2">
          {/* Title */}
          <h2 className="text-center relative left-0 lg:text-left text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black tracking-wide leading-none">
            <span className="gradient-stroke">BUT HOW ?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center lg:text-left text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wide">
            <span className="gradient-strokes">
              BHAI NE BOLA KARNE KA, TO KARNE KA !!
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col relative left-15 gap-4 lg:gap-5 mt-4 lg:mt-6">
            {[
              "STRATEGY FIRST",
              "CONVERSION COPY",
              "PRO-GRADE PRODUCTION",
              "CONTENT REPURPOSING",
            ].map((label, idx) => (
              <button
                key={idx}
                className="relative w-full text-center max-w-[500px] lg:max-w-[500px] px-6 py-4 lg:py-5 rounded-full font-black text-white uppercase shadow-lg overflow-hidden transition-transform hover:scale-105 text-base md:text-lg lg:text-xl flex items-center gap-3 lg:gap-4"
              >
                {/* Red gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"></span>
                {/* Diagonal stripes */}
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20"></span>
                {/* Gloss shine overlay */}
                <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-full"></span>
                {/* Label */}
                <span className="relative z-10 text-center flex justify-center items-center w-full gap-3 text-2xl">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4777 14.6391L21.8858 17.0456L26.6988 12.2326C27.9755 10.9559 28.6927 9.22434 28.6927 7.41882C28.6927 5.6133 27.9755 3.88172 26.6988 2.60502C26.0666 1.97287 25.3162 1.47141 24.4902 1.12929C23.6642 0.787171 22.779 0.611084 21.885 0.611084C20.0795 0.611084 18.3479 1.32833 17.0712 2.60502L12.2583 7.41797L14.6647 9.82614L19.4777 5.0115C20.1161 4.37303 20.9821 4.01435 21.885 4.01435C22.7879 4.01435 23.6539 4.37303 24.2923 5.0115C24.9308 5.64996 25.2895 6.5159 25.2895 7.41882C25.2895 8.32174 24.9308 9.18768 24.2923 9.82614L19.4777 14.6391ZM14.6647 19.4537L17.0712 21.8602L12.2583 26.6732C10.9816 27.9498 9.24998 28.6671 7.44445 28.6671C5.63893 28.6671 3.90736 27.9498 2.63066 26.6732C1.35396 25.3965 0.636719 23.6649 0.636719 21.8594C0.636719 20.0538 1.35396 18.3223 2.63066 17.0456L7.4436 12.2326L9.85178 14.6391L5.03713 19.4537C4.39889 20.0922 4.04043 20.958 4.04059 21.8608C4.04075 22.7636 4.39952 23.6293 5.03798 24.2675C5.67644 24.9058 6.54229 25.2642 7.44506 25.2641C8.34782 25.2639 9.21354 24.9051 9.85178 24.2667L14.6647 19.4537Z"
                      fill="white"
                    />
                    <path
                      d="M19.4792 12.2327C19.7985 11.9134 19.9779 11.4803 19.9779 11.0286C19.9779 10.577 19.7985 10.1439 19.4792 9.82455C19.1598 9.50521 18.7267 9.32581 18.2751 9.32581C17.8235 9.32581 17.3904 9.50521 17.071 9.82455L9.8516 17.0457C9.68905 17.2027 9.5594 17.3905 9.4702 17.5981C9.38101 17.8057 9.33406 18.0291 9.3321 18.255C9.33013 18.481 9.37319 18.7051 9.45876 18.9143C9.54434 19.1234 9.67071 19.3134 9.8305 19.4732C9.9903 19.633 10.1803 19.7594 10.3895 19.845C10.5986 19.9306 10.8227 19.9736 11.0487 19.9716C11.2747 19.9697 11.498 19.9227 11.7056 19.8335C11.9133 19.7443 12.1011 19.6147 12.2581 19.4521L19.4792 12.2327Z"
                      fill="white"
                    />
                  </svg>

                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* Play Sample - Positioned at bottom right */}
          <div className="relative bottom-50 left-25 flex justify-center lg:justify-end">
            {/* Glow background */}
            <div className="absolute inset-0 bottom-15 flex items-center justify-center lg:justify-end lg:pr-12">
              <div className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.3)_0%,transparent_70%)]"></div>
            </div>

            {/* Play button container */}
            <div className="relative z-10 right-25 bottom-3 flex flex-col items-center gap-3">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-white flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 lg:w-12 lg:h-12 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white text-sm lg:text-base font-semibold">
                Play Sample
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
