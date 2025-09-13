"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import pod from "@/../public/gautampodcast 1.png"


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
    <section className="relative flex items-center justify-center bg-black text-white py-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center w-full gap-8">
        {/* Left Heading */}
        <div className="flex-1 text-left px-6">
          <h2 className="text-9xl font-bold leading-tight">
            What <br /> we <br /> Offer
          </h2>
        </div>

        {/* Right Carousel */}
        <div className="flex-4 relative h-[700px] flex items-center justify-center">
          {cards.map((card, i) => {
            const pos = getPosition(i);
            if (pos === 99) return null; // skip hidden ones

            const isCenter = pos === 0;

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-lg backdrop-blur-3xl p-6 flex flex-col items-center justify-center overflow-hidden fading-b-t`}
                style={{
                  width: isCenter ? "500px" : "480px",
                  height: isCenter ? "670px" : "650px",
                  opacity: isCenter ? 1 : 0.5,
                  transform: `translateX(${pos * 260}px) scale(${isCenter ? 1.1 : 0.9})`,
                  zIndex: isCenter ? 20 : 10,
                }}
              >
                <h3 className="text-4xl font-black uppercase mb-2 text-left mt-3">{card.title}</h3>
                <p className="text-gray-300">{card.desc}</p>
                <h1 className="mt-5 text-9xl">STUDIO</h1>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={450}
                  height={350}
                  className="rounded-xl object-contain -mt-15"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
