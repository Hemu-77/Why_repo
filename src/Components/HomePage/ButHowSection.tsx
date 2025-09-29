"use client";

import React, { useRef } from "react";
import Image from "next/image";
import character from "../../../public/cirkitgautam 1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Image animation
      tl.from(".character-img", {
        opacity: 0,
        scale: 1.3,
        duration: 1.2,
      });

      // Heading animation (big -> hold -> shrink to normal)
      tl.from(".heading", {
        opacity: 0,
        scale: 2,
        y: 100,
        duration: 1.2,
        ease: "back.out(1.7)",
      }).to(".heading", {
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      });

      // Subtitle
      tl.from(".subtitle", {
        opacity: 0,
        y: 50,
        duration: 0.8,
      });

      // Buttons stagger
      tl.from(".btn-anim", {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.25,
      });

      // Play button glow
      tl.from(".play-btn", {
        opacity: 0,
        scale: 0.5,
        rotate: -90,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white px-4 sm:px-6 lg:px-16 pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto w-full max-w-7xl">
        {/* Left Character */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={character}
            alt="Character"
            className="character-img w-[250px] sm:w-[350px] md:w-[450px] lg:w-[1600px] object-contain -ml-15"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center lg:text-left relative">
          {/* Title */}
          <h2 className="heading font-konnect text-6xl sm:text-5xl md:text-6xl lg:text-[10rem] font-black tracking-wide lg:-ml-95 lg:-mr-20">
            <span className="gradient-stroke">BUT HOW ?</span>
          </h2>

          {/* Subtitle */}
          <p className="subtitle text-base sm:text-lg md:text-xl lg:text-[1.75rem] font-semibold text-red-500 uppercase lg:-ml-90">
            <span className="gradient-strokes">
              BHAI NE BOLA KARNE KA, TO KARNE KA !!
            </span>
          </p>

          {/* Buttons */}
          <div className="space-y-5 -ml-60 -mt-20">
            {[
              "STRATEGY FIRST",
              "CONVERSION COPY",
              "PRO-GRADE PRODUCTION",
              "CONTENT REPURPOSING",
            ].map((label, idx) => (
              <button
                key={idx}
                className="btn-anim relative w-full sm:w-[350px] md:w-[450px] lg:w-[550px] px-6 sm:px-8 py-4 sm:py-6 rounded-full font-black text-white uppercase shadow-lg overflow-hidden transition-transform hover:scale-105 text-lg sm:text-xl lg:text-2xl mt-2"
              >
                {/* Red gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"></span>
                {/* Diagonal stripes */}
                <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20"></span>
                {/* Gloss shine overlay */}
                <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-30 rounded-full mix-blend-overlay pointer-events-none"></span>
                {/* Label */}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>

          {/* Play Sample */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Glow background */}
            <div className="absolute inset-0 flex items-center justify-center lg:-mt-80 lg:ml-90">
              <div className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[150px] sm:h-[200px] md:h-[220px] lg:h-[250px] rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.8)_0%,black_80%)]"></div>
            </div>

            {/* Play button */}
            <div className="play-btn relative z-10 w-16 sm:w-20 md:w-24 lg:w-26 h-16 sm:h-20 md:h-24 lg:h-26 rounded-full bg-red-500 border-4 border-white flex items-center justify-center lg:-mt-80 lg:ml-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
