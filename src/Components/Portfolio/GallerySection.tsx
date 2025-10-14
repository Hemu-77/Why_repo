"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "@/../public/img5.png";
import img2 from "@/../public/img6.png";
import img3 from "@/../public/img7.png";
import img4 from "@/../public/lastimage.png";
import NewsletterFooter from "../Common/footer";

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".podcast-img1", {
        y: -150,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".podcast-img2", {
        y: -150,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".podcast-img3", {
        y: 150,
        opacity: 0,
        duration: 2.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".podcast-img3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".podcast-img4, .podcast-img5", {
        y: 100,
        opacity: 0,
        duration: 2.0,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".last-row",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
    <div
      ref={containerRef}
      className="grid lg:grid-cols-11 gap-4 p-4 col-span-12 grid-cols-1 bg-black px-10 lg:py-5 mb-7 mt-10 lg:mb-30"
    >
      {/* Top Left */}
      <div className="podcast-img1 col-span-12 lg:col-span-6 overflow-hidden rounded-3xl lg:rounded-tr-[150px] lg:rounded-tl-[60px] lg:rounded-bl-[60px]">
        <Image
          src={img1}
          alt="Interview with tripod"
          width={800}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
  
      {/* Top Right */}
      <div className="podcast-img2 col-span-12 lg:col-span-5 overflow-hidden rounded-3xl lg:rounded-tl-[150px] lg:rounded-tr-[60px] lg:rounded-br-[60px]">
        <Image
          src={img2}
          alt="Interview with bookshelf"
          width={200}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
  
      {/* Bottom Full Width */}
      <div className="podcast-img3 col-span-12 overflow-hidden rounded-3xl lg:rounded-tl-[60px] lg:rounded-bl-[60px] lg:rounded-tr-[150px]">
        <Image
          src={img3}
          alt="Close-up with plant background"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
  
      {/* Last Two Images Row */}
      <div className="last-row col-span-12 grid grid-cols-1 md:grid-cols-5 gap-4 lg:mt-4">
        {/* Left Small Image */}
        <div className="podcast-img4 overflow-hidden rounded-3xl md:col-span-2 lg:rounded-tr-[150px] lg:rounded-tl-[50px] lg:rounded-bl-[60px]">
          <Image
            src={img1}
            alt="Behind the scenes"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Right Wide Image */}
        <div className="podcast-img5 overflow-hidden rounded-3xl md:col-span-3 lg:rounded-tl-[150px] lg:rounded-br-[50px]">
          <Image
            src={img4}
            alt="Podcast setup"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  
    <div>
      <NewsletterFooter />
    </div>
  </div>
  
  );
};

export default GallerySection;
