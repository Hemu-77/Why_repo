"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "@/../public/header.png";
import Sitting from "@/../public/sittingRight.png";
import { Public_Sans } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const publicSans = Public_Sans({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const CaseStudySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in background
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Animate text
      gsap.fromTo(
        textRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      // Animate sitting image
      gsap.fromTo(
        imgRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.8,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-center h-[90vh] px-6 sm:px-10 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none"></div>

      {/* Text */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center lg:text-left">
        <h1
          ref={textRef}
          className={`${publicSans.className} text-white leading-[1.1] font-semibold 
            text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[200px]
            drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] stroke-blur lg:mt-20`}
        >
          Case Studies
        </h1>
      </div>

      {/* Sitting Image */}
      <div className="relative flex-1 flex items-center justify-center z-10 h-[50vh] sm:h-[70vh] lg:h-[90vh] mt-4 lg:mt-60">
        <Image
          ref={imgRef}
          src={Sitting}
          alt="Sitting"
          className="object-contain w-full max-w-[700px] sm:max-w-[1000px] md:max-w-[1300px] lg:max-w-[1500px] xl:max-w-[1800px]"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default CaseStudySection;
