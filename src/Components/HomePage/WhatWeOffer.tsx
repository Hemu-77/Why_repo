"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import pod from "@/../public/gautampodcast 1.png";

export default function ReflectedServices() {
  const cards = [
    {
      title: "Podcast Services",
      desc: "Navigate the ever-evolving digital landscape with finesse. Our expert social media gurus curate and orchestrate your online presence, ensuring your brand shines bright across platforms.",
      img: pod,
    },
    {
      title: "Product Analysis",
      desc: "Unlock insights with in-depth analysis to help optimize your product performance and reach the right audience effectively.",
      img: pod,
    },
    {
      title: "Brand Strategy",
      desc: "Build a compelling story for your brand with strategies tailored to enhance visibility, trust, and long-term growth.",
      img: pod,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  // Helper to calculate position (-1 = left, 0 = center, 1 = right)
  const getPosition = (i: number) => {
    if (i === index) return 0;
    if (i === (index + 1) % cards.length) return 1;
    if (i === (index - 1 + cards.length) % cards.length) return -1;
    return 99; // hidden (for more than 3 cards)
  };

  return (
    <section className="relative flex items-center justify-center bg-black text-white py-16 overflow-hidden mb-20">
      
      {/* 🔹 Mobile View (hidden on lg and above) */}
      <div className="flex flex-col items-center w-full px-4 lg:hidden">
        {/* Mobile Heading */}
        <div className="w-full text-center px-6">
          <h2 className="text-7xl font-bold leading-tight text-black/50 stroke-white">
            What we Offer
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="relative w-full h-[600px] flex justify-center items-center mt-8 overflow-hidden">
  {cards.map((card, i) => (
    <div
      key={i}
      className={`absolute w-11/12 transition-all duration-700 ease-in-out`}
      style={{
        opacity: i === index ? 1 : 0,
        transform: `translateX(${i === index ? 0 : 200}px)`,
        zIndex: i === index ? 20 : 10,
      }}
    >
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl p-[2px]  bg-gradient-to-b from-[#80FBFF] to-black">
  {/* Inner Card with its own background */}
  <div className="rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-3xl bg-black">
    <h3 className="text-2xl font-black uppercase mb-2 text-center mt-3">{card.title}</h3>
    <p className="text-gray-300 text-sm text-center">{card.desc}</p>
    <h1 className="mt-5 text-6xl text-black/50 stroke-white font-extrabold">
    <span className="stroke-blur">STUDIO</span>
    </h1>
    <Image
      src={card.img}
      alt={card.title}
      width={300}
      height={200}
      className="rounded-xl object-contain mt-5"
    />
  </div>
</div>
    </div>
  ))}
</div>

      </div>
      
      {/* 🔹 Desktop View (hidden on smaller screens) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center w-full gap-8 mx-auto max-w-7xl">
        {/* Left Heading (Desktop) */}
        <div className="flex-1 text-left px-6 -ml-25">
          <h2 className="text-9xl font-bold leading-tight">
            <span className="stroke-blur">What <br /> we <br /> Offer</span>
          </h2>
        </div>
        <div className=" flex justify-start gap-3 mt-160 relative -ml-70">
      {cards.map((_, i) => (
        <span
          key={i}
          className={`w-4 h-4 rounded-full transition-colors duration-300 ${
            index === i ? "bg-red-500" : "bg-gray-200"
          }`}
        ></span>
      ))}
    </div>

        {/* Right Carousel (Desktop) */}
        <div className="flex-4 relative h-[700px] flex items-center justify-center ml-80">
  {cards.map((card, i) => {
    const pos = getPosition(i);
    if (pos === 99) return null; // skip hidden ones

    const isCenter = pos === 0;

    return (
      <div
        key={i}
        className="absolute transition-all duration-700 ease-in-out"
        style={{
          width: isCenter ? "500px" : "480px",
          height: isCenter ? "670px" : "650px",
          opacity: isCenter ? 1 : 0.5,
          transform: `translateX(${pos * 260}px) scale(${isCenter ? 1.1 : 0.9})`,
          zIndex: isCenter ? 20 : 10,
        }}
      >
        {/* Gradient border wrapper */}
        <div className="relative w-full h-full rounded-2xl p-[2px] bg-gradient-to-b from-[#80FBFF] to-black">
          {/* Actual card */}
          <div className="w-full h-full rounded-2xl shadow-lg backdrop-blur-3xl p-6 flex flex-col items-center justify-center overflow-hidden bg-black">
            <h3 className="text-4xl font-black uppercase mb-2 text-left mt-3">{card.title}</h3>
            <p className="text-gray-300">{card.desc}</p>
            <h1 className="mt-5 text-9xl stroke-blur">STUDIO</h1>
            <Image
              src={card.img}
              alt={card.title}
              width={450}
              height={350}
              className="rounded-xl object-contain -mt-15"
            />
          </div>
        </div>
      </div>
    );
  })}
  
</div>


      </div>
    </section>
  );
}