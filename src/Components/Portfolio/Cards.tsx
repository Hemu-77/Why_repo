"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/../public/card1.png";
import card2 from "@/../public/card2.png";
import card3 from "@/../public/youtube.png";
import bg from "@/../public/second.png";
import { Outfit, Inter } from "next/font/google";
import NewsletterFooter from "../Common/footer";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const cards = [
  {
    id: 1,
    slug: "how-to-crack-interview",
    image: card1,
    title: "How to Crack Interview",
    subtitle: "My Life Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    slug: "childrens-future",
    image: card2,
    title: "Children’s Future ?",
    subtitle: "Do you really care for your",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 3,
    slug: "bootstrap-to-10cr",
    image: card3,
    title: "Bootstrap To 10CR+",
    subtitle: "Invested in 60+ Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const VideoCards: React.FC = () => {
  return (
    <div className="relative w-full bg-black flex flex-col items-center justify-center gap-8 py-10">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className=" -z-0 mt-[500px]"
      />

      {/* Cards */}
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col md:flex-row items-center md:items-start 
          bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl rounded-3xl 
          p-6 md:p-8 w-[90%] md:w-[80%] max-w-6xl shadow-xl 
          hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={340}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 text-white mt-6 md:mt-0">
            <h2
              className={`text-3xl md:text-4xl font-extrabold mb-2 ${inter.className}`}
            >
              {card.title}
            </h2>
            <p
              className={`text-lg font-semibold mb-3 text-gray-300 ${inter.className}`}
            >
              {card.subtitle}
            </p>
            <p
              className={`text-sm md:text-base text-gray-400 leading-relaxed ${outfit.className}`}
            >
              {card.description}
            </p>

            {/* Link to Detail Page */}
            <Link href={`/portfolio/${card.slug}`}>
              <button
                className="mt-6 self-start bg-gradient-to-r from-[#ff3b3b] to-[#ff2a2a]
                hover:scale-105 transition-transform px-6 py-2 rounded-full
                font-bold text-white shadow-md"
              >
                OPEN
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="z-40 mt-40 w-full">
        <NewsletterFooter />
      </div>
    </div>
  );
};

export default VideoCards;
