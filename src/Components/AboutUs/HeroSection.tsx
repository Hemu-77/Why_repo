"use client";

import Image from "next/image";
import character from "@/../public/Sitting.png";
import bg from "@/../public/header.png";

export default function HeroSection() {
  return (
    <section className="relative h-[800px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* ---------- Desktop Version ---------- */}
      <div
        className="hidden lg:flex relative z-10 flex-nowrap w-full max-w-9xl overflow-hidden
        [background:linear-gradient(to_bottom,black_1%,transparent_20%),linear-gradient(to_right,black_1%,transparent_20%),linear-gradient(to_left,black_1%,transparent_20%),radial-gradient(circle_at_top_left,black_5%,transparent_30%),radial-gradient(circle_at_top_right,black_5%,transparent_20%)]"
      >
        <h1 className="text-[4.8rem] font-extrabold text-white whitespace-nowrap ml-15 mt-86">
          Where The
        </h1>

        <div className="relative w-full h-[970px] overflow-hidden -mt-30 -ml-10">
          <Image
            src={character}
            alt="Character"
            fill
            className="object-cover object-top mt-44 -z-10"
            priority
          />
        </div>

        <h1 className="text-[4.8rem] font-extrabold text-white w-full -ml-36 mt-86">
          Brand Go <span className="text-red-500">Viral</span>
        </h1>
      </div>

      {/* ---------- Mobile Version ---------- */}
      <div className="block lg:hidden relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-6xl sm:text-4xl font-extrabold text-white mt-10">
          Where The
        </h1>

        <div className="relative w-full h-[450px] sm:h-[400px] my-6">
          <Image
            src={character}
            alt="Character"
            fill
            className="object-contain object-top -z-10"
            priority
          />
        </div>

        <h1 className="text-6xl sm:text-4xl font-extrabold text-white">
          Brand Go <span className="text-red-500">Viral</span>
        </h1>
      </div>
    </section>
  );
}
