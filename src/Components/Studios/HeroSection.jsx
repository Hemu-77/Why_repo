"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import character from "@/../public/Sitting.png";
import bg from "@/../public/header.png";

export default function HeroSection() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // Timeline
    const tl = gsap.timeline();

    // Animate each letter (from left to right)
    tl.from(letters, {
      x: -100,        // 👈 move from left
      opacity: 0,
      stagger: 0.15,  // each letter one after another
      ease: "power4.out",
      duration: 0.8,
    });

    // Animate character after text
    tl.from(
      imgRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "+=0.3"
    );
  }, []);

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
        className="relative z-10 flex items-center w-full max-w-7xl mx-auto pt-20 sm:pt-28 md:pt-32 lg:pt-60"
      >
        {/* Studio text */}
        <h1
          ref={textRef}
          className="stroke-blur relative font-semibold whitespace-nowrap -z-10 font-konnect
          text-9xl sm:text-7xl md:text-9xl lg:text-[440px]
          ml-2 sm:ml-6 md:ml-12 lg:mr-20 lg:-ml-10
          mt-2 sm:mt-6 md:mt-10 lg:-mt-10"
        >
          {"Studio".split("").map((letter, i) => (
            <span key={i} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>

        {/* Character image */}
        <div
          ref={imgRef}
          className="relative z-20 
          w-120 h-84 sm:w-80 sm:h-80 md:w-72 md:h-[420px]
          lg:w-full lg:h-[970px] mt-15
          -ml-95 sm:-ml-10 md:-ml-20 lg:-ml-280 lg:-mt-10"
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
