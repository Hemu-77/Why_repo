"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pod from "@/../public/gautampodcast 1.png";

gsap.registerPlugin(ScrollTrigger);

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
  const mobileRefs = useRef<HTMLDivElement[]>([]);
  const desktopRefs = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  // Scroll-triggered sequence
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Step 1: animate heading
    tl.fromTo(
      headingRef.current,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );

    // Step 2: animate cards (both mobile + desktop refs)
    tl.fromTo(
      [...mobileRefs.current, ...desktopRefs.current],
      { y: -1150, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      },
       // delay after heading
    );
  }, []);

  // 🔹 Keep your existing mobile + desktop animation useEffects unchanged
  useEffect(() => {
    mobileRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index) {
        gsap.fromTo(
          el,
          { x: 300, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
        );
      } else {
        gsap.to(el, {
          x: -300,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power3.in",
        });
      }
    });
  }, [index]);

  useEffect(() => {
    desktopRefs.current.forEach((el, i) => {
      if (!el) return;

      const pos =
        i === index
          ? 0
          : i === (index + 1) % cards.length
          ? 1
          : i === (index - 1 + cards.length) % cards.length
          ? -1
          : 99;

      if (pos === 99) {
        gsap.to(el, { opacity: 0, x: 600, scale: 0.8, duration: 0.7 });
      } else {
        const isCenter = pos === 0;
        gsap.to(el, {
          x: pos * 280,
          scale: isCenter ? 1.1 : 0.9,
          opacity: isCenter ? 1 : 0.5,
          zIndex: isCenter ? 20 : 10,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    });
  }, [index]);

  return (
    <section className="relative flex items-center justify-center bg-black text-white py-16 overflow-hidden mb-20">
      {/* 🔹 Mobile View */}
      <div className="flex flex-col items-center w-full px-4 lg:hidden">
        <div className="w-full text-center px-6">
          <h2
            ref={headingRef}
            className="text-7xl font-bold leading-tight text-black/50 stroke-white"
          >
            What we Offer
          </h2>
        </div>

        <div className="relative w-full h-[600px] flex justify-center items-center mt-8 overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) mobileRefs.current[i] = el;
              }}
              className="absolute w-11/12 rounded-2xl p-[2px] bg-gradient-to-b from-[#80FBFF] to-black"
            >
              <div className="rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-3xl bg-black">
                <h3 className="text-2xl font-black uppercase mb-2 text-center mt-3">
                  {card.title}
                </h3>
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
          ))}
        </div>
      </div>

      {/* 🔹 Desktop View */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center w-full gap-8 mx-auto max-w-7xl md:max-w-6xl">
        <div className="flex-1 text-left px-6 lg:-ml-35">
          <h2
            ref={headingRef}
            className="text-9xl font-bold leading-tight"
          >
            <span className="stroke-blur">
              What <br /> we <br /> Offer
            </span>
          </h2>
        </div>

        {/* dots */}
        <div className="flex justify-start gap-3 mt-160 relative -ml-70">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === i ? "bg-red-500" : "bg-gray-200"
              }`}
            ></span>
          ))}
        </div>

        {/* card slider */}
        <div className="flex-4 relative h-[700px] flex items-center justify-center ml-80">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) desktopRefs.current[i] = el;
              }}
              className="absolute lg:w-[480px] h-[650px] md:w-[380px] rounded-2xl p-[2px] bg-gradient-to-b from-[#80FBFF] to-black"
            >
              <div className="w-full h-full rounded-2xl shadow-lg backdrop-blur-3xl p-6 flex flex-col   overflow-hidden bg-black">
                <h3 className="text-4xl font-black uppercase mb-2 text-left mt-3">
                  {card.title}
                </h3>
                <p className="text-gray-300">{card.desc}</p>
                <h1 className="mt-5 lg:text-9xl stroke-blur md:text-7xl md:-ml-6">STUDIO</h1>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={450}
                  height={350}
                  className="rounded-xl object-contain -mt-15"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
