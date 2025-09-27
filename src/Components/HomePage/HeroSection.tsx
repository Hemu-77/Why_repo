"use client";

import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import character from "../../../public/gautamleaningwall 1.png";
import bg from "../../../public/header.png";
import microphone from "@/../public/microphone.png";

const HeroSection: FC = () => {
  
  useGSAP(() => {
    gsap.from('#were',{
      y : 1250,
      fontSize: "10rem",
      duration: 5
})

  },[])

  useGSAP(() => {
    gsap.from('#were2',{
      y : 1250,
      
      fontSize: "10rem",
      duration: 5,
      delay:6

    })

  },[])

  

  return (
    <section
      className="relative min-h-screen flex text-white overflow-hidden bg-cover bg-center mx-auto"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="w-full max-w-7xl mx-auto my-auto">
        <div
          className="relative container px-4 lg:px-16 lg:pt-16 grid grid-cols-1 lg:grid-cols-6 items-center pt-20 -ml-20"
        >
          {/* Right Character */}
          <div className="relative mx-auto lg:mx-0 mt-8 lg:mt-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[450px] lg:col-span-1 pl-0 lg:pl-4 order-1 lg:order-2">
            <Image
              src={character}
              alt="Character"
              className="object-contain"
              priority
            />
          </div>

          {/* Left Content */}
          <div
            
            className="lg:col-span-5 space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <p id="were" className="text-xl sm:text-2xl md:text-3xl lg:text-[2.7rem] font-extrabold">
              We’re Not A{" "}
              <span className="text-yellow px-2 py-1 rounded-md inline-flex items-center">
                Studio
                <Image
                  src={microphone}
                  alt="microphone"
                  className="w-13 h-13 object-contain ml-3"
                />
              </span>
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.3rem] font-black leading-tight tracking-tight">
              <span id="were2">We’re the reason your{" "}</span>
              <span className="text-white">competitors</span>{" "}
              <span className="text-white">panic.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-[1.3rem] text-white max-w-full lg:max-w-[60rem] font-[150] pt-1 mt-6 lg:mt-14">
              From high-converting ads to studio-grade videos, podcasts to PR —
              we create content that builds authority, drives traffic, and fuels
              serious brand growth.
            </p>

            <button className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold shadow-lg transition mt-6 lg:mt-10">
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
