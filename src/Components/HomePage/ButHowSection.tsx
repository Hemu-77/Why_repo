"use client";

import Image from "next/image";
import { FC } from "react";
import { Play, Link } from "lucide-react"; 
import img2 from "../../../public/img2.png";

const HowSection: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Character */}
        <div className="flex justify-center lg:justify-start relative">
          <Image
            src={img2}
            alt="Illustration"
            width={2800} // increased width
            height={900} // increased height
            className="relative z-10 max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start space-y-8 lg:space-y-10">
          {/* Heading */}
          <h2 className="text-7xl lg:text-8xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 [text-shadow:0_0_4px_rgba(255,0,0,0.8)]">
              BUT HOW ?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-red-500 font-semibold uppercase">
            BHAI NE BOLA KARNE KA, TO KARNE KA !!
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            {[
              "Strategy First",
              "Conversion Copy",
              "Pro-Grade Production",
              "Content Repurposing",
            ].map((label, idx) => (
              <button
                key={idx}
                className="flex items-center justify-start gap-3 w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-lg lg:text-xl font-semibold shadow-lg transition"
              >
                <Link className="w-5 h-5" /> {label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Play Sample */}
          <div className="flex items-center gap-3 mt-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-600 opacity-40 blur-xl animate-pulse"></div>
              <button className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-red-600 rounded-full text-white shadow-lg">
                <Play className="w-7 h-7 lg:w-8 lg:h-8" fill="white" />
              </button>
            </div>
            <span className="text-sm lg:text-base text-gray-300">Play Sample</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
