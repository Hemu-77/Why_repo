"use client";

import Image from "next/image";
import character from "@/../public/Sitting.png";
import bg from "@/../public/header.png"; // 👈 import background

export default function HeroSection() {
  return (
    <section className="relative h-[800px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-20"
      />


      {/* Main content */}
      <div className="relative z-10 flex items-center flex-nowrap w-full max-w-9xl overflow-hidden
      [background:linear-gradient(to_bottom,black_1%,transparent_20%),linear-gradient(to_right,black_1%,transparent_20%),linear-gradient(to_left,black_1%,transparent_20%),radial-gradient(circle_at_top_left,black_5%,transparent_30%),radial-gradient(circle_at_top_right,black_5%,transparent_20%)]">
  <h1 className="text-[4.8rem] font-extrabold text-white whitespace-nowrap ml-15 mt-16">
    Where The
  </h1>

  <div className="relative w-full h-[970px] overflow-hidden">
    <Image
      src={character}
      alt="Character"
      fill
      className="object-cover object-top mt-44 overflow-hidden -z-10"
      priority
    />
  </div>

  <h1 className="text-[4.8rem] font-extrabold text-white w-full -ml-36 mt-16">
    Brand Go <span className="text-red-500">Viral</span>
  </h1>
</div>


      
    </section>
  );
}
