"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../public/gautampodcast 1.png";
import img2 from "../../../public/youtube.png";
import img3 from "@/../public/video2.png"
import img4 from "@/../public/video3.png"
import { Public_Sans } from "next/font/google";
import NewsletterFooter from "../Common/footer";


const publicSans = Public_Sans({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const charRef = useRef<HTMLDivElement | null>(null);
  const mobileVideoRef = useRef<HTMLDivElement | null>(null);
  const desktopVideoRefs = useRef<Array<HTMLDivElement | null>>([]); 
  const playBtnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Wait for charRef to be mounted
    if (!charRef.current) return;

    // keep only non-null elements
    const desktopEls = desktopVideoRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: charRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Character image fade + scale
    tl.fromTo(
      charRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    // Mobile video card
    if (mobileVideoRef.current) {
      tl.fromTo(
        mobileVideoRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.4"
      );
    }

    // Desktop stacked videos cascade (only if we have elements)
    if (desktopEls.length > 0) {
      tl.fromTo(
        desktopEls,
        { y: 120, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }

    // Play button pulse animation (infinite loop)
    if (playBtnRef.current) {
      gsap.to(playBtnRef.current, {
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1.2,
      });
    }

    // cleanup on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
      if (playBtnRef.current) gsap.killTweensOf(playBtnRef.current);
    };
  }, []);

  return (
    <div>
      <h1 className={`${publicSans.className} text-8xl stroke-blur text-center py-4 mb-6`}>Portfolio</h1>
      <section className="px-4 md:px-12 lg:px-20 py-12 bg-black flex flex-col items-center mb-10 ">
      {/* Character image */}

     



      <div ref={charRef} className="relative flex justify-center items-center w-full mb-8 pt-10 backdro -mt-20">
        <Image
          src={img1}
          alt="Character"
          width={500}
          height={400}
          className="object-contain w-[220px] md:w-[400px] lg:w-[500px]"
          priority
        />
      </div>

      {/* Mobile: Single video */}
      <div className="block md:hidden w-full ">
        <div
          ref={mobileVideoRef}
          className="w-full border border-white rounded-2xl overflow-hidden relative -mt-25"
        >
          <Image
            src={img2}
            alt="Video"
            width={1200}
            height={400}
            className="object-contain w-full rounded-xl"
            priority
          />

          {/* Play button */}
          <div
            ref={playBtnRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-16 h-16 rounded-full bg-red-600 flex items-center justify-center border-4 border-white shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Stacked videos */}
      <div className="hidden md:block">
        <div
          ref={(el: HTMLDivElement | null): void => { desktopVideoRefs.current[0] = el; }}
          className="max-w-9xl backdrop-blur relative px-5 py-5 -mt-50 border-1 border-white rounded-3xl z-20"
        >
          <Image src={img2} alt="Videos" width={1350} height={400} className="object-contain" priority />
        </div>
        <div
          ref={(el: HTMLDivElement | null): void => { desktopVideoRefs.current[1] = el; }}
          className="max-w-[76rem] flex flex-col blur-xs px-5 backdrop-blur-2xl glow-box items-center justify-center relative ml-10 -mt-155 border-1 border-white rounded-3xl z-10 py-5"
        >
          <Image src={img3} alt="Videos" width={1200} height={400} className="object-contain rounded" priority />
        </div>
        <div
          ref={(el: HTMLDivElement | null): void => { desktopVideoRefs.current[2] = el; }}
          className="max-w-[70rem] flex flex-col glow-box blur-xs px-5 items-center justify-center relative ml-18 -mt-140 border-1 border-white rounded-3xl py-5"
        >
          <Image src={img4} alt="Videos" width={1200} height={400} className="object-contain" priority />
        </div>

        <div className="relative flex items-center justify-center -mt-50 z-30">
          {/* Blurred Circle */}
          <div className="absolute w-50 h-50 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 shadow-lg"></div>

          {/* Inner Circle (Play Button Background) */}
          <div
            ref={playBtnRef}
            className="relative w-38 h-38 rounded-full bg-red-600 flex items-center justify-center border-4 border-white shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-20 h-20">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-40">
      <NewsletterFooter/>
      </div>
    </section>
    </div>
  );
}
