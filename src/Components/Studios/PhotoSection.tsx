"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "@/../public/img5.png";
import img2 from "@/../public/img6.png";
import img3 from "@/../public/img7.png";

gsap.registerPlugin(ScrollTrigger);

const PodcastLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Top left image
      gsap.from(".podcast-img1", {
        x: -150,
        opacity: 0,
        duration: 3.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img1",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Top right image
      gsap.from(".podcast-img2", {
        x: 150,
        opacity: 0,
        duration: 3.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Bottom full image
      gsap.from(".podcast-img3", {
        y: 150,
        opacity: 0,
        duration: 2.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img3",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-11 gap-4 p-4 bg-black px-10 lg:py-5 mb-7 mt-30"
    >
      {/* Top Left */}
      <div className="podcast-img1 col-span-6 overflow-hidden lg:rounded-tr-[150px] lg:rounded-tl-[60px] lg:rounded-bl-[60px]">
        <Image
          src={img1}
          alt="Interview with tripod"
          width={800}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Top Right */}
      <div className="podcast-img2 col-span-5 overflow-hidden lg:rounded-tl-[150px] lg:rounded-tr-[60px] lg:rounded-br-[60px]">
        <Image
          src={img2}
          alt="Interview with bookshelf"
          width={200}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom (Full Width) */}
      <div className="podcast-img3 col-span-12 overflow-hidden lg:rounded-tl-[60px] lg:rounded-bl-[60px] lg:rounded-tr-[150px]">
        <Image
          src={img3}
          alt="Close-up with plant background"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PodcastLayout;
