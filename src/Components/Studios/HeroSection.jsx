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
      <div className="relative z-10 flex items-center flex-nowrap w-full max-w-9xl overflow-hidden pt-40
      [background:linear-gradient(to_bottom,black_1%,transparent_20%),linear-gradient(to_right,black_1%,transparent_20%),linear-gradient(to_left,black_1%,transparent_20%),radial-gradient(circle_at_top_left,black_5%,transparent_30%),radial-gradient(circle_at_top_right,black_5%,transparent_20%)]">
  <h1 className="text-[25rem] font-black text-white whitespace-nowrap ml-35 mt-16 -z-10">
    Studio
  </h1>

  <div className="relative w-full h-[970px] z-10 -ml-255">
    <Image
      src={character}
      alt="Character"
      fill
      className="object-cover object-top mt-24 z-10 pr-70"
      priority
    />
  </div>


</div>


      
    </section>
  );
}
