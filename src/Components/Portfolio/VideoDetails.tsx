"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Outfit } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner from "@/../public/banner.png";
import NewsletterFooter from "@/Components/Common/footer";
import type { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Video {
    title: string;
    subtitle: string;
    mainImage: string;
    sectionImage: StaticImageData | string;
  }
  

const inter = Inter({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface VideoDetailClientProps {
  slug: string;
}

const videoData: Record<string, Video> = {
    "how-to-crack-interview": {
      title: "How to Crack Interview",
      subtitle: "My Life Story (Kannada)",
      mainImage: "/card1.png",
      sectionImage: banner,
    },
    "childrens-future": {
      title: "Children’s Future?",
      subtitle: "Do you really care for your",
      mainImage: "/card2.png",
      sectionImage: banner,
    },
    "bootstrap-to-10cr": {
      title: "Bootstrap To 10CR+",
      subtitle: "Invested in 60+ Startups",
      mainImage: "/youtube.png",
      sectionImage: banner,
    },
  };

export default function VideoDetailClient({ slug }: VideoDetailClientProps) {
  

  const video = videoData[slug];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setSectionRef = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const sectionsToAnimate = sectionsRef.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    sectionsRef.current = [];

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      sectionsToAnimate.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  if (!video) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black mt-10">
        <h2 className="text-2xl">Video not found.</h2>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white px-6 md:px-20 py-10 pt-20 overflow-hidden"
    >
      <Link href="/portfolio">
        <button className="bg-white/10 text-white px-4 py-2 rounded-full mb-6 hover:bg-white/20 transition">
          Back
        </button>
      </Link>

      <div className="w-full max-w-7xl mx-auto z-30 mb-40">
        {/* Main Image */}
        <div
          ref={imageRef}
          className="bg-white/10 backdrop-blur-3xl p-3 rounded-3xl z-20"
        >
          <Image
            src={video.mainImage}
            alt={video.title}
            width={1300}
            height={814}
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mt-8 ${inter.className}`}
        >
          {video.title}
        </h1>

        {/* Section 1 */}
        <section ref={setSectionRef} className="mt-10">
          <h2 className={`text-2xl font-semibold mb-3 ${inter.className}`}>
            Invested in 60+ Startups
          </h2>
          <p className={`text-gray-400 leading-relaxed ${outfit.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Section 2 */}
        <section
          ref={setSectionRef}
          className="mt-10 grid md:grid-cols-2 gap-6 items-center"
        >
          <div>
            <h3 className={`text-2xl font-semibold mb-3 ${inter.className}`}>
              How to start 60+ Startups
            </h3>
            <p className={`text-gray-400 leading-relaxed ${outfit.className}`}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat.
            </p>
          </div>
          <Image
            src={video.sectionImage}
            alt="Startup Company"
            width={550}
            height={250}
            className="rounded-2xl shadow-md object-cover"
          />
        </section>

        {/* Section 3 */}
        <div ref={setSectionRef} className="mt-20">
          <p className={`${outfit.className} text-gray-400 text-[18px]`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        {/* Section 4 */}
        <div ref={setSectionRef} className="mt-20">
          <p className={`${outfit.className} text-gray-400 text-[18px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>

      <div className="z-50">
        <NewsletterFooter />
      </div>
    </div>
  );
}
