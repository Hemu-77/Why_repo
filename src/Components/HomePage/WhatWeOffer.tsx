"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReflectedServices() {
  const cards = [
    {
      title: "Podcast Services",
      desc: "Navigate the ever-evolving digital landscape with finesse. Our expert social media gurus curate and orchestrate your online presence, ensuring your brand shines bright across platforms.",
      img: "/images/podcast.png", // put your image path here
    },
    {
      title: "Product Analysis",
      desc: "Unlock insights with in-depth analysis to help optimize your product performance and reach the right audience effectively.",
      img: "/images/analysis.png",
    },
    {
      title: "Brand Strategy",
      desc: "Build a compelling story for your brand with strategies tailored to enhance visibility, trust, and long-term growth.",
      img: "/images/strategy.png",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="relative flex items-center justify-center bg-black text-white p-10 overflow-hidden transform scale-x-[-1]">
      {/* Flip children back so text/icons are readable */}
      <div className="flex flex-col lg:flex-row items-center w-full transform scale-x-[-1]">
        
        {/* Left Side Heading */}
        <div className="flex-1 text-left">
          <h2 className="text-5xl font-bold leading-tight">
            What <br /> we <br /> Offer
          </h2>
        </div>

        {/* Right Side Carousel */}
        <div className="flex-1 relative overflow-hidden h-[350px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="min-w-full bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="rounded-xl mb-4 object-contain"
                />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-center">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
