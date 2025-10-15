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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollContainerRef.current!.offsetWidth,
      },
    });

    // Cleanup on unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Horizontal scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex w-[400vw] h-screen items-center"
      >
        {/* Panel 1 */}
        <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center">
          <div className="w-[80%] h-[80%] overflow-hidden rounded-[60px]">
            <Image
              src={img1}
              alt="Gallery Image 1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Panel 2 */}
        <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center">
          <div className="w-[80%] h-[80%] overflow-hidden rounded-[60px]">
            <Image
              src={img2}
              alt="Gallery Image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Panel 3 */}
        <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center">
          <div className="w-[80%] h-[80%] overflow-hidden rounded-[60px]">
            <Image
              src={img3}
              alt="Gallery Image 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Panel 4 */}
        <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center">
          <div className="w-[80%] h-[80%] overflow-hidden rounded-[60px]">
            <Image
              src={img4}
              alt="Gallery Image 4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Footer (appears after horizontal scroll ends) */}
      <div className="bg-black py-16">
        <NewsletterFooter />
      </div>
    </section>
  );
};

export default GallerySection;
