"use client";

import Image from "next/image";
import character from "@/../public/gautamlying 1.png";
import bg from "@/../public/second.png"; 

export default function BrandsSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl ">
        
        {/* Left: Character + Heading */}
        <div className="lg:w-[70rem] flex flex-col items-center lg:items-start space-y-6 z-10 -ml-14">
          {/* Character Image */}
          <Image
            src={character}
            alt="Character"
            width={800}
            height={400}
            className="object-contain"
            priority
          />

          {/* Heading below image */}
          <h2 className="text-[5rem] font-extrabold outlined-text text-center leading-tight lg:text-left -mt-38 ml-14 pl-2.5 -z-10">
            Brands That <br /> Trust Us !
          </h2>
        </div>

        {/* Right: Circles */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-10 mt-15 lg:mt-0">
  <div className="flex flex-col items-center space-y-6 -ml-18 mt-18 z-10">
    {/* Top Circle */}
    <div className="w-65 h-65 p-6 rounded-full text-center flex flex-col justify-center items-center relative z-10 
        backdrop-blur-md bg-white/10 
        border-t-2 border-b-2 border-white/40">
      <p className="text-8xl font-extrabold">3+</p>
      <p className="text-l">Years of Experience</p>
    </div>

    {/* Bottom 3 Circles */}
    <div className="flex justify-center -space-x-6 -mt-12 relative z-0">
      <div className="w-70 h-70 p-6 rounded-full text-center flex flex-col justify-center items-center
          backdrop-blur-md bg-white/10 
          border-t-2 border-b-2 border-white/40">
        <p className="text-8xl font-bold">50+</p>
        <p className="text-l">Successful Projects</p>
      </div>
      <div className="w-70 h-70 p-6 rounded-full text-center flex flex-col justify-center items-center
          backdrop-blur-md bg-white/10 
          border-t-2 border-b-2 border-white/40">
        <p className="text-8xl font-bold">40+</p>
        <p className="text-l">Happy Clients</p>
      </div>
      <div className="w-70 h-70 p-6 rounded-full text-center flex flex-col justify-center items-center
          backdrop-blur-md bg-white/10 
          border-t-2 border-b-2 border-white/40">
        <p className="text-8xl font-semibold">40+</p>
        <p className="text-l">5 Star Reviews</p>
      </div>
    </div>
  </div>

  {/* Tagline */}
  <p className="italic text-[2.6rem] text-white text-center lg:text-left -ml-13">
    Picture abhi baaki hai mere doooost!
  </p>
</div>

      </div>
    </section>
  );
}
