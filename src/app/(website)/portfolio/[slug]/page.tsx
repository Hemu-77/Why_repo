"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Outfit } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner from "@/../public/banner.png";
// NOTE: Removed unused 'bg' import
import NewsletterFooter from "@/Components/Common/footer";
// NOTE: Removed 'FC' import to avoid type constraint conflicts

/**
 * Renamed interface to VideoPageProps to prevent potential conflict
 * with a globally misconfigured 'PageProps' or 'VideoDetailProps' type.
 */
interface VideoPageProps {
  params: {
    slug: string;
  };
  // Add searchParams if you ever need query parameters:
  // searchParams: { [key: string]: string | string[] | undefined };
}

gsap.registerPlugin(ScrollTrigger);

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

/**
 * FIX: Defined as a standard, typed function component.
 * This structure prevents the component from being implicitly constrained
 * by a faulty global type that expects a Promise for 'params'.
 */
const VideoDetail = ({ params }: VideoPageProps) => {
  const { slug } = params;
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoData: Record<string, any> = {
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

  const video = videoData[slug];

  // Refs for animation
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Helper function for assigning refs to sections and collecting them
  const setSectionRef = (el: HTMLDivElement | null) => {
    // Only push if the element exists and isn't already in the array
    if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
    }
  };


  useEffect(() => {
    if (!containerRef.current) return;

    // Filter out null values for ScrollTrigger
    const sectionsToAnimate = sectionsRef.current.filter((el): el is HTMLDivElement => el !== null);
    
    // Clear the array after use for next renders (important for dynamic refs)
    sectionsRef.current = [];

    const ctx = gsap.context(() => {
      // Initial fade in for main image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
      });

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      // Section animations on scroll
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
        <section
          ref={setSectionRef}
          className="mt-10"
        >
          <h2 className={`text-2xl font-semibold mb-3 ${inter.className}`}>
            Invested in 60+ Startups
          </h2>
          <p className={`text-gray-400 leading-relaxed ${outfit.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
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
        <div
          ref={setSectionRef}
          className="mt-20"
        >
          <p className={`${outfit.className} text-gray-400 text-[18px]`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>

        {/* Section 4 */}
        <div
          ref={setSectionRef}
          className="mt-20"
        >
          <p className={`${outfit.className} text-gray-400 text-[18px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="z-50">
        <NewsletterFooter />
      </div>
    </div>
  );
}

export default VideoDetail;