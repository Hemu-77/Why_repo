"use client";

import Image from "next/image";
import { FC } from "react";
import character from "../../../public/gautamleaningwall 1.png"; 
import bg from "../../../public/header.png";       

const HeroSection: FC = () => {
  return (
    <section
      className="relative min-h-screen flex text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
   <div
  className="relative container px-2 lg:px-16 grid grid-cols-1 lg:grid-cols-6 items-center w-full
  [background:linear-gradient(to_bottom,black_1%,transparent_20%),linear-gradient(to_right,black_3%,transparent_20%),linear-gradient(to_left,black_3%,transparent_40%),radial-gradient(circle_at_top_left,black_5%,transparent_30%),radial-gradient(circle_at_top_right,black_5%,transparent_20%)]"
>

  
  {/* Left Content (3/4) */}
  <div className="lg:col-span-5 space-y-6">
    <p className="text-[2.7rem] font-extrabold">
      We’re Not A{" "}
      <span className="text-yellow px-2 py-1 rounded-md inline-flex items-center">
        Studio 🎤
      </span>
    </p>

    <h1 className="text-5xl lg:text-[5.3rem] font-black leading-tight tracking-tight">
      We’re the reason your{" "}
      <span className="text-white">competitors</span>{" "}
      <span className="text-white">panic.</span>
    </h1>

    <p className="text-white max-w-[60rem] font-[150] pt-1 text-[1.3rem] mt-14">
      From high-converting ads to studio-grade videos, podcasts to PR —
      we create content that builds authority, drives traffic, and fuels
      serious brand growth.
    </p>

    <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold shadow-lg transition mt-10">
      DOWNLOAD PORTFOLIO
    </button>
  </div>

  {/* Right Character (1/4) */}
  <div className="relative w-[350px] lg:w-[450px] lg:col-span-1 pl-4">
    <Image
      src={character}
      alt="Character"
      className="object-contain"
      priority
    />
  </div>
</div>

    </section>
  );
};

export default HeroSection;
