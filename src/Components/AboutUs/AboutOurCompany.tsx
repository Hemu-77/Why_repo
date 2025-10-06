"use client";

import React, { useRef, useEffect } from "react";
import { Montserrat, Outfit, DM_Sans } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

const inter = DM_Sans({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const AboutCompany = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      id: "01",
      title: "Why Choose Us",
      desc: "Whymedia stands out for its commitment to excellence, passion for media, and a dedicated team that brings your vision to life with unmatched ...",
    },
    {
      id: "02",
      title: "Our Mission",
      desc: `"Our mission at Whymedia is to empower brands and individuals by delivering exceptional video production, post-production, and distribution services. We strive to create high-quality, engaging, and visually ."`,
    },
    {
      id: "03",
      title: "Our Vision",
      desc: `"To be the leading 360° media company that transforms ideas into impactful visual stories, driving innovation and growth for businesses worldwide."`,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".about-heading", {
        y: 50,
        opacity: 0,
        duration: 2.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 95%",
        },
      });

      // Animate cards
      gsap.from(".about-card", {
        y: 100,
        opacity: 0,
        duration: 2.0,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-6">
      <div className="max-w-[84rem] mx-auto text-center">
        <h2
          className={`about-heading text-4xl md:text-6xl lg:text-[64px] font-[600] mb-12 relative inline-block text-black/50 stroke-white ${inter.className}`}
        >
          <span className="stroke-blur">About Our Company</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="about-card relative rounded-xl p-[2px] shadow-lg bg-gradient-to-b from-[#80FBFF] to-black"
            >
              <div className="rounded-xl bg-gradient-to-br from-black via-black to-[#5b0808] p-6 text-left hover:shadow-red-600/30 transition duration-300 lg:h-[230px]">
                <h3
                  className={`text-[36px] font-bold mb-3 ${montserrat.className}`}
                >
                  {item.id}. {item.title}
                </h3>
                <p
                  className={`text-base text-gray-500 leading-relaxed font-semibold ${outfit.className}`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
