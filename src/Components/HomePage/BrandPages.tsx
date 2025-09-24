"use client";

import Image from "next/image";
import character from "@/../public/gautamlying 1.png";
import bg from "@/../public/second.png";

export default function BrandsSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center px-4 sm:px-6 lg:px-12 -mt-15 lg:-ml-20"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
        {/* Left: Character + Heading */}
        <div className="w-full lg:w-[70rem] flex flex-col items-center lg:items-start z-20 lg:-ml-14">
          <Image
            src={character}
            alt="Character"
            width={800}
            height={400}
            className="object-contain w-[90%] sm:w-[600px] lg:w-[800px]"
            priority
          />

          <h2 className="text-6xl sm:text-5xl lg:text-[5rem] font-semibold text-center stroke-blur leading-tight lg:text-left lg:-mt-30 lg:ml-8 pl-2.5 text-black/50 stroke-white -z-10">
            <span>
              Brands That <br /> Trust Us !
            </span>
          </h2>
        </div>

        {/* Right: Circles */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-10 -mt-12 lg:mt-0">
          <div className="flex flex-col items-center space-y-6 lg:-ml-18 mt-10 lg:mt-18 z-10">
            {/* Top Circle */}
            <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-65 lg:h-65 p-6 rounded-full flex flex-col justify-center items-center mb-10 
              backdrop-blur-md bg-white/10 border-t-2 border-b-2 border-white/40">
              <p className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">3+</p>
              <p className="text-sm sm:text-base lg:text-lg">Years of Experience</p>
            </div>

            {/* Bottom 3 Circles */}
            <div className="flex flex-col lg:flex-row justify-center gap-6 lg:-space-x-6 -mt-6 lg:-mt-12">
              {[
                { number: "50+", label: "Successful Projects" },
                { number: "40+", label: "Happy Clients" },
                { number: "40+", label: "5 Star Reviews" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-48 h-48 sm:w-52 sm:h-52 lg:w-70 lg:h-70 p-6 rounded-full flex flex-col justify-center items-center
                  backdrop-blur-md bg-white/10 border-t-2 border-b-2 border-white/40"
                >
                  <p className="text-3xl sm:text-5xl lg:text-8xl font-bold">{item.number}</p>
                  <p className="text-sm sm:text-base lg:text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="italic text-xl sm:text-2xl lg:text-[40px] font-[800] font-urbanist tracking-normal 
  bg-gradient-to-r from-white to-[#FF9494] bg-clip-text text-transparent lg:-mr-70">
  Picture abhi baaki hai mere doooost!
</p>
        </div>
      </div>
    </section>
  );
}
