"use client";

import Image from "next/image";
import bg from "@/../public/header.png";
import character from "@/../public/gautampointingtext 1.png";
import { ChevronDown } from "lucide-react";
import { Outfit } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ptMono = Outfit({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 2 }, // slower animations
      });

      // Title slides in smoothly
      tl.from(".heading-title", {
        x: -100,
        opacity: 0,
      });

      // Paragraph fades up slowly
      tl.from(
        ".intro-text",
        {
          y: 60,
          opacity: 0,
          duration: 2.5,
        },
        "-=1.2"
      );

      // Pills fade-in one by one
      tl.from(
        ".nav-pill",
        {
          y: 30,
          opacity: 0,
          stagger: 0.4,
        },
        "-=1.5"
      );

      // Circles appear gently
      tl.from(
        ".circle-red",
        {
          scale: 0.4,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "-=1"
      );

      tl.from(
        ".circle-outline",
        {
          scale: 0.5,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        },
        "-=1.4"
      );

      // Character slides in slowly from right
      tl.from(
        ".character-image",
        {
          x: 180,
          opacity: 0,
          duration: 2.5,
          ease: "power3.out",
        },
        "-=1.8"
      );

      // Explore text fades in
      tl.from(
        ".explore-text",
        {
          y: 60,
          opacity: 0,
          duration: 2,
        },
        "-=1.2"
      );

      // Parallax: character moves subtly on scroll
      gsap.to(".character-image", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // smoother
        },
      });

      // Heading slow float on scroll
      gsap.to(".heading-title", {
        y: 40,
        opacity: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Infinite slow rotation for circular text
      gsap.to(".circle-text", {
        rotate: 360,
        duration: 40, 
        repeat: -1,
        ease: "linear",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-start md:justify-center overflow-visible py-5 mb-10"
    >
      {/* Background (unchanged) */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center z-10"
      />

      {/* Blur overlay */}
      <div className="absolute right-0 top-0 h-full w-3/4 backdrop-blur-[60px] -z-10 hidden md:block"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 py-8 md:py-16 mt-25 z-20">
        {/* Left content */}
        <div className="flex flex-col space-y-4 md:space-y-6 pt-12 md:pt-0 z-10">
          <h1 className="heading-title text-white text-7xl md:text-[11rem] font-extrabold leading-none">
            Our <br /> Portfolio
          </h1>

          <p className="intro-text text-white/80 text-sm md:text-base leading-relaxed max-w-[28rem]">
            We start by really getting to know our clients, digging into what
            keeps them up at night. By listening carefully and asking the right
            questions, we uncover their pain points and challenges.
          </p>

          {/* Circles */}
          <div className="relative lg:flex hidden items-center justify-center -ml-20 mt-4 md:ml-20 md:-mt-20 lg:ml-120">
            <div className="circle-red w-20 h-20 md:w-50 md:h-50 rounded-full bg-red-500 -ml-12 -mt-6 md:-ml-30 md:-mt-12"></div>
            <div className="circle-outline absolute w-32 h-32 md:w-52 md:h-52 rounded-full border border-white/40 backdrop-blur-3xl flex items-center justify-center ml-20 md:ml-34">
              <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="circle-text absolute text-[0.5rem] md:text-sm text-white [writing-mode:vertical-rl] rotate-[120deg] tracking-[0.2em]">
                WE ARE HERE • WE ARE HERE • WE ARE HERE •
              </span>
            </div>
          </div>
        </div>

        {/* Right character */}
        <div className="flex flex-col h-[1000px] w-screen rounded-4xl items-center space-y-4 md:space-y-6 -mb-120 md:mt-0 -ml-90 pl-10 overflow-visible backdrop">
          <h3
            className={`explore-text relative text-white font-bold text-2xl md:text-5xl pr-0 md:pr-10 md:pt-35 lg:text-[48px] lg:-ml-80px lg:-mt-25 ${ptMono.className}`}
          >
            EXPLORE ALL OUR PORTFOLIO
          </h3>
          <div className="relative w-[280px] h-[350px] md:w-[420px] md:h-[520px] ml-60 lg:mt-0 lg:-mr-10 overflow-visible">
            <Image
              src={character}
              alt="Character"
              fill
              className="character-image object-contain z-20"
              priority
            />
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 gap-4 mt-30 lg:mt-20 z-20 lg:flex hidden md:block mb-30">
        <span className="nav-pill px-6 py-2 rounded-full bg-red-500 text-white font-medium">
          Portfolio
        </span>
        <span className="nav-pill px-6 py-2 rounded-full bg-black/40 backdrop-blur-lg text-white">
          Case Studies
        </span>
        <span className="nav-pill px-6 py-2 rounded-full bg-black/40 backdrop-blur-lg text-white">
          Gallery
        </span>
      </div>
    </section>
  );
}
