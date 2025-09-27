"use client";

import Image from "next/image";
import { FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import character from "../../../public/gautamleaningwall 1.png";
import bg from "../../../public/header.png";
import microphone from "@/../public/microphone.png";

const HeroSection: FC = () => {
 

  useGSAP(() => {
    const tl = gsap.timeline();
  
    tl.from("#were .word", {
      y: 10,         
      fontSize: "10rem", 
      opacity: 1,
      duration: 4,
      ease:"back.inOut",
      stagger: 1,
      
    });
  

    tl.to("#were .word", {
      y:0,
      x:0,
      fontSize: "2.7rem", 
      duration: 1,
      ease: "power3.out",   
      stagger: 0.3,
    });
  
 
    tl.fromTo(
      "#main-heading .word",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      
    );
  
 
    tl.to("#description", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "+=0.4");
    tl.to("#cta-btn", { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.6");
    tl.to("#character", { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");
  }, []);

  return (
    <section
      className="relative min-h-screen flex text-white overflow-hidden bg-cover bg-center mx-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div className="relative container px-4 lg:px-16 lg:pt-16 grid grid-cols-1 lg:grid-cols-6 items-center pt-20 -ml-20">
          {/* Right Character */}
          <div
            id="character"
            className="relative mx-auto lg:mx-0 mt-8 lg:mt-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[450px] lg:col-span-1 pl-0 lg:pl-4 order-1 lg:order-2 opacity-0 translate-x-20"
          >
            <Image
              src={character}
              alt="Character"
              className="object-contain"
              priority
            />
          </div>

          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Animated first line */}
            <p
              id="were"
              className="text-xl sm:text-2xl md:text-3xl lg:text-[2.7rem] font-extrabold"
            >
              <span className="word">We’re</span>{" "}
              <span className="word">Not</span>{" "}
              <span className="word">A</span>{" "}
              <span className="word text-yellow px-2 py-1 rounded-md inline-flex items-center">
                Studio
                <Image
                  src={microphone}
                  alt="microphone"
                  className="w-13 h-13 object-contain ml-3"
                />
              </span>
            </p>

            {/* Main heading */}
            <h1
              id="main-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.3rem] font-black leading-tight tracking-tight"
            >
              <span className="word">We’re</span>{" "}
              <span className="word">the</span>{" "}
              <span className="word">reason</span>{" "}
              <span className="word">your</span>{" "}
              <span className="word text-white">competitors</span>{" "}
              <span className="word text-white">panic</span>
              <span className="word text-white">.</span>
            </h1>

            {/* Description */}
            <p
              id="description"
              className="opacity-0 translate-y-10 text-sm sm:text-base md:text-lg lg:text-[1.3rem] text-white max-w-full lg:max-w-[60rem] font-[150] pt-1 mt-6 lg:mt-14"
            >
              From high-converting ads to studio-grade videos, podcasts to PR —
              we create content that builds authority, drives traffic, and fuels
              serious brand growth.
            </p>

            {/* Button */}
            <button
              id="cta-btn"
              className="opacity-0 translate-y-6 px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold shadow-lg transition mt-6 lg:mt-10"
            >
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
