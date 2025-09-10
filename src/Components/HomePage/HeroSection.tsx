"use client";

import Image from "next/image";
import { FC } from "react";
import img1 from "../../../public/img1.png"
const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background with vertical spotlight panels */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.9)_0%,rgba(0,0,0,1)_20%,rgba(20,20,20,0.9)_40%,rgba(0,0,0,1)_60%,rgba(20,20,20,0.9)_80%,rgba(0,0,0,1)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(80,80,80,0.25)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-xl font-semibold">
            We’re Not A{" "}
            <span className="bg-yellow-400 text-black px-2 py-1 rounded-md inline-flex items-center">
              Studio <span className="ml-1">🎤</span>
            </span>
          </p>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            We’re the reason your{" "}
            <span className="text-white">competitors</span>{" "}
            <span className="text-gray-300">panic.</span>
          </h1>

          <p className="text-gray-400 max-w-xl">
            From high-converting ads to studio-grade videos, podcasts to PR — we
            create content that builds authority, drives traffic, and fuels
            serious brand growth.
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold shadow-lg transition">
            Download Portfolio
          </button>
        </div>

        {/* Right Side (Image / Illustration) */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Border highlight */}
            <div className="absolute -inset-4  rounded-lg"></div>
            {/* Replace with your actual illustration */}
            <Image
              src={img1}
              alt="Illustration"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
