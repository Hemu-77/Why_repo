"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import character from "@/../public/Sitting.png";
import bg from "@/../public/header.png";

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 2 } });

    // Character comes from bottom
    tl.fromTo(
      ".character",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    // Words slide up one by one
    tl.fromTo(
      ".word",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25 },
      "-=1.5" // overlap with character animation
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[800px] flex flex-col items-center justify-center overflow-hidden"
    >


      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

<div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none"></div>
      {/* ---------- Desktop Version ---------- */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="hidden lg:flex relative z-10 flex-nowrap -ml-10 overflow-hidden mt-30">
          <h1 className="word text-[4.8rem] font-extrabold text-white whitespace-nowrap mt-86">
            Where The
          </h1>

          <div className="relative w-full h-[970px] overflow-hidden -mt-30 -ml-20">
            <Image
              src={character}
              alt="Character"
              fill
              className="character object-cover object-top mt-44 -z-10"
              priority
            />
          </div>

          <h1 className="word relative text-[4.8rem] font-extrabold text-white -ml-55 mt-86">
            <span>Brand</span>
          </h1>
          <h1 className="word relative text-[4.8rem] font-extrabold text-white mt-86 mr-4 ml-4">
            <span>Go</span>
          </h1>
          <h1 className="word text-[4.8rem] font-extrabold text-white mt-86 -pr-20 ">
            <span className="text-red-500">Viral</span>
          </h1>
        </div>
      </div>

      {/* ---------- Mobile Version ---------- */}
      <div className="lg:hidden relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="word text-6xl sm:text-4xl font-extrabold text-white mt-10">
          Where The
        </h1>

        <div className="relative w-full h-[450px] sm:h-[400px] my-6">
          <Image
            src={character}
            alt="Character"
            fill
            className="character object-contain object-top -z-10"
            priority
          />
        </div>

        <h1 className="word text-6xl sm:text-4xl font-extrabold text-white">
          Brand Go <span className="text-red-500">Viral</span>
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>

    </section>
  );
}
