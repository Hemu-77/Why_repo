"use client";

import Image from "next/image";
import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import character from "../../../public/gautamleaningwall 1.png";
import bg from "../../../public/header.png";
import microphone from "@/../public/microphone.png";

const HeroSection: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none"
        });
      };

      window.addEventListener('mousemove', moveCursor);

      gsap.set(cursor, { opacity: 1, scale: 1 });
    }
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set("#small-heading", {
      y: "100vh",
      x: "50vw",
      xPercent: -65,
      scale: 1.5,
      opacity: 0,
      fontSize: "5rem",
      zIndex: 1000,
    });

    gsap.set("#main-heading .line", {
      y: "100vh",
      x: "50vw",
      xPercent: -50,
      scale: 1.8,
      opacity: 0,
      fontSize: "5rem",
      zIndex: 1000,
    });

    gsap.set("#description .word", {
      opacity: 0,
      filter: "blur(10px)",
    });

    gsap.set("#cta-btn", {
      opacity: 0,
      y: 20,
    });

    gsap.set("#character", {
      opacity: 0,
      x: 100,
    });

    tl.to("#small-heading", {
      opacity: 1,
      duration: 1.2,
      
      ease: "power3.out",
    });

    tl.to("#main-heading .line:first-child", {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    }, "-=0.3")
    .to("#small-heading", {
      y: "60vh",
      duration: 1.5,
      ease: "power3.out",
    }, "<");

    tl.to("#main-heading .line:last-child", {
      opacity: 1,
      duration: 1.8,
      ease: "power3.out",
    }, "-=0.5")
    .to("#small-heading", {
      y: "30vh",
      duration: 1.8,
      ease: "power3.out",
    }, "<")
    .to("#main-heading .line:first-child", {
      y: "40vh",
      duration: 1.8,
      ease: "power3.out",
    }, "<");

    tl.to("#third-heading .line", {
      opacity: 1,
      duration: 1.8,
      ease: "power3.out",
    }, "-=0.3")
    .to("#small-heading", {
      y: "0vh",
      duration: 1.8,
      ease: "power3.out",
    }, "<")
    .to("#main-heading .line:first-child", {
      y: "5vh",
      duration: 1.8,
      ease: "power3.out",
    }, "<")
    .to("#main-heading .line:last-child", {
      y: "15vh",
      duration: 1.8,
      ease: "power3.out",
    }, "<");

    tl.to("#small-heading", {
      y: 0,
      x: 0,
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      fontSize: "3rem",
      zIndex: 1,
      duration: 1.8,
      ease: "power3.out",
    }, "+=0.3");

    tl.to(
      "#main-heading .line",
      {
        y: 0,
        x: 0,
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        fontSize: "inherit",
        zIndex: 1,
        duration: 1.8,
        ease: "power3.out",
      },
      "<"
    );

    tl.to(cursor, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "<");

    tl.to(
      "#description .word",
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl.to(
      "#cta-btn",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    tl.to(
      "#character",
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=1"
    );
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full relative">
          <div className="absolute left-22 inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold">Loading...</span>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen flex text-white overflow-hidden bg-cover bg-center mx-auto">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        quality={100}
        className="object-cover z-10"
      />
      <div className="w-full max-w-7xl mx-auto my-auto z-20">
        <div className="relative container px-4 lg:px-16 lg:pt-16 grid grid-cols-1 lg:grid-cols-6 items-center pt-20 -ml-20">
          {/* Right Character */}
          <div
            id="character"
            className="relative opacity-0 mx-auto  lg:mx-0 mt-8 lg:mt-0 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[450px] lg:col-span-1 pl-0 lg:pl-4 order-1 lg:order-2"
          >
            <Image src={character} alt="Character" className="object-contain" priority />
          </div>

          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Small heading */}
            <p
              id="small-heading"
              className="text-xl opacity-0 sm:text-2xl md:text-3xl lg:text-[2.7rem] font-extrabold"
            >
              We're Not A{" "}
              <span className="text-yellow px-2 py-1 rounded-md inline-flex items-center">
                Studio
                <Image
                  src={microphone}
                  alt="microphone"
                  className="w-13 h-13 object-contain ml-3"
                />
              </span>
            </p>

            {/* Main heading  */}
            <h1
              id="main-heading"
              className="text-3xl  sm:text-4xl md:text-5xl lg:text-[5.3rem] font-black leading-tight tracking-tight"
            >
              <div className="line opacity-0">We're the reason</div>
              <div className="line opacity-0">your competitors panic.</div>
            </h1>
            <p
              id="description"
              className="text-sm  sm:text-base md:text-lg lg:text-[1.3rem] text-white max-w-full lg:max-w-[60rem] font-[150] pt-1 mt-6 lg:mt-14"
            >
              {[
                "From", "high-converting", "ads", "to", "studio-grade", "videos,", 
                "podcasts", "to", "PR", "—", "we", "create", "content", "that", 
                "builds", "authority,", "drives", "traffic,", "and", "fuels", 
                "serious", "brand", "growth."
              ].map((word, index) => (
                <span key={index} className="word inline-block mr-1 opacity-0">
                  {word}
                </span>
              ))}
            </p>

            {/* Button */}
            <button
              id="cta-btn"
              className="px-5 sm:px-6 py-2 opacity-0 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold shadow-lg transition mt-6 lg:mt-10"
            >
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;