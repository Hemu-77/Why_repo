"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import character from "@/../public/gautamlying 1.png";
import bg from "@/../public/second.png";

gsap.registerPlugin(ScrollTrigger);

// Custom hook to detect large screens
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
}

export default function BrandsSection() {
  const isLarge = useIsLargeScreen();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Split tagline words for animation
  useLayoutEffect(() => {
    const el = taglineRef.current;
    if (!el) return;
    const text = el.innerText.trim();
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="tag-word inline-block opacity-0 translate-y-3" 
           style="display:inline-block;opacity:0;transform:translateY(12px);will-change:transform,opacity;">${word}&nbsp;</span>`
      )
      .join("");
  }, [isLarge]); // reset when layout switches

  // GSAP animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tagWords = gsap.utils.toArray<HTMLElement>(".tag-word");
      gsap.to(tagWords, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: taglineRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        ".circle-left",
        { y: -250 },
        {
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".circle-right",
        { y: -250 },
        {
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "center center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".circle-middle",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "center center",
            scrub: 1,
          },
        }
      );

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: -120,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }

      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isLarge]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col h-full items-center mb-20 -mt-20 justify-center text-white overflow-hidden bg-cover bg-center px-4 sm:px-6 lg:px-12"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-1/8 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Render only one layout depending on screen size */}
      {isLarge ? (
        // -------------------- LARGE SCREEN VERSION --------------------
        <div className="relative z-10 flex-row items-center justify-between w-full max-w-7xl lg:-mt-25 flex">
          {/* Left: Image + Heading */}
          <div className="w-full lg:w-[70rem] flex flex-col items-center lg:items-start z-20 lg:-ml-28">
            <Image
              ref={imageRef}
              src={character}
              alt="Character"
              width={800}
              height={400}
              className="object-contain w-[90%] md:w-[600px] md:ml-10"
              priority
            />
            <h2
              ref={headingRef}
              className="text-6xl lg:text-[5rem] font-semibold text-center stroke-blur leading-tight lg:text-left lg:-mt-30 lg:ml-8 pl-2.5 md:ml-20 text-black/50 stroke-white -z-10"
            >
              <span className="md:ml-10">
                Brands That <br /> <span className="md:ml-10">Trust Us !</span>
              </span>
            </h2>
          </div>

          {/* Right: Circles + Tagline */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-10 -mt-12 lg:mt-0 lg:-ml-20">
            <div className="flex flex-col items-center space-y-6 lg:-ml-18 mt-10 lg:mt-18 z-10">
              <div className="circle-top w-48 h-48 sm:w-52 sm:h-52 md:h-60 md:w-60 lg:w-65 lg:h-65 p-6 rounded-full flex flex-col justify-center items-center mb-10 z-20 backdrop-blur-md bg-white/0 border-t-2 border-b-2 border-white/40">
                <p className="text-4xl sm:text-6xl lg:text-8xl font-extrabold">3+</p>
                <p className="text-sm sm:text-base lg:text-lg">Years of Experience</p>
              </div>

              <div className="flex flex-col lg:flex-row justify-center gap-6 lg:-space-x-12 -mt-6 lg:-mt-12">
                {[
                  { num: "50+", label: "Successful Projects", cls: "circle-left" },
                  { num: "40+", label: "Happy Clients", cls: "circle-middle" },
                  { num: "40+", label: "5 Star Reviews", cls: "circle-right" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item.cls} w-48 h-48 sm:w-52 sm:h-52 md:h-60 md:w-60 lg:w-70 lg:h-70 p-6 rounded-full flex flex-col justify-center items-center backdrop-blur-md bg-white/0 border-t-2 border-b-2 border-white/40`}
                  >
                    <p className="text-3xl sm:text-5xl lg:text-8xl font-bold">{item.num}</p>
                    <p className="text-sm sm:text-base lg:text-lg">{item.label}</p>
                  </div>
                ))}
              </div>
            
            </div>
           

            <p
              ref={taglineRef}
              className="italic text-xl sm:text-2xl lg:text-[40px] font-[800] font-urbanist tracking-normal bg-gradient-to-r from-white to-[#f14141] bg-clip-text lg:-ml-20"
            >
              Picture abhi baaki hai mere doooost!
            </p>
          </div>
        </div>
      ) : (
        // -------------------- MOBILE VERSION --------------------
        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
          
          <h2
            ref={headingRef}
            className="text-6xl sm:text-5xl md:text-6xl font-semibold text-center mt-6 sm:mt-8 text-black/50 stroke-white max-w-[85%] mx-auto"
          >
            <span className="block sm:ml-6">
              Brands That <br /> <span className="sm:ml-6">Trust Us !</span>
            </span>
          </h2>
          <Image
            ref={imageRef}
            src={character}
            alt="Character"
            width={1000}
            height={600}
            className="object-contain w-[95%] sm:w-[70%] md:w-[600px]"
            priority
          />
          

          <div className="flex flex-col items-center space-y-6 mt-10 z-10">
            <div className="circle-top w-50 h-50 sm:w-48 sm:h-48 md:w-76 md:h-76 rounded-full flex flex-col justify-center items-center mb-8 backdrop-blur-md bg-white/0 border-t-2 border-b-2 border-white/40">
              <p className="text-3xl sm:text-5xl font-extrabold">3+</p>
              <p className="text-xs sm:text-sm">Years of Experience</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 -mt-6 sm:-mt-8">
              {[
                { num: "50+", label: "Successful Projects" },
                { num: "40+", label: "Happy Clients" },
                { num: "40+", label: "5 Star Reviews" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-45 h-45 sm:w-48 sm:h-48 md:w-76 md:h-76 rounded-full flex flex-col justify-center items-center backdrop-blur-md bg-white/0 border-t-2 border-b-2 border-white/40"
                >
                  <p className="text-3xl sm:text-5xl font-bold">{item.num}</p>
                  <p className="text-xs sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p
            ref={taglineRef}
            className="italic text-[20px] sm:text-xl md:text-2xl font-[800] font-urbanist tracking-normal bg-gradient-to-r from-white to-[#FF9494] bg-clip-text text-transparent mt-6 text-center sm:max-w-[80%] mx-auto"
          >
            Picture abhi baaki hai mere doooost!
          </p>
        </div>
      )}

<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>
    </section>
  );
}
