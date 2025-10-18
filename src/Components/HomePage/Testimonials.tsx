"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import man from "@/../public/man.png";
import { Urbanist, Outfit } from "next/font/google";

const urban = Urbanist({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function ReflectedTestimonials() {
  const testimonials = [
    {
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      img: man,
      title: "Best of Best Media",
      rating: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free.",
    },
    {
      name: "Sophia Johnson",
      role: "Product Manager",
      img: man,
      title: "Best of Best Media",
      rating: 5,
      text: "This service has transformed how I manage payments for my team. The ease of use and reliability are unmatched. Highly recommend to anyone who values efficiency.",
    },
    {
      name: "Liam Brown",
      role: "Business Owner",
      img: man,
      title: "Best of Best Media",
      rating: 5,
      text: "Finally, a platform I can trust. No hidden surprises, just clear and reliable service every time. My customers love it too.",
    },
  ];

  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Animation with GSAP
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }
      );

      gsap.fromTo(
        textRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0.3,
        }
      );

      gsap.fromTo(
        buttonRefs.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          delay: 0.8,
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col mb-20 h-[650px] items-center lg:justify-center bg-black text-white px-6 -pt-40 lg:pt-28 md:py-0 md:-mt-15 overflow-hidden transform scale-x-[-1] md:mb-90 lg:mb-0 md:pb-30"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-7xl mx-auto transform scale-x-[-1] gap-10 lg:gap-20">
        {/* LEFT SIDE — TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <p
            ref={(el) => {
              if (el) textRefs.current[0] = el;
            }}
            className="text-red-600 uppercase tracking-widest text-sm mb-2"
          >
            TESTIMONIAL
          </p>

          <h2
            ref={headingRef}
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mb-4 ${urban.className}`}
          >
            We’ve built trust with <br className="hidden sm:block" /> reviews
            from real users
          </h2>

          <p
            ref={(el) => {
              if (el) textRefs.current[1] = el;
            }}
            className={`text-gray-300 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 ${outfit.className}`}
          >
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center lg:justify-start gap-6 md:mb-10">
            <button
              ref={(el) => {
                if (el) buttonRefs.current[0] = el;
              }}
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition text-white text-2xl"
            >
              &lt;
            </button>
            <button
              ref={(el) => {
                if (el) buttonRefs.current[1] = el;
              }}
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition text-white text-2xl"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — CAROUSEL */}
        <div className="relative flex-1 flex justify-center items-center h-[360px] lg:-mt-250 lg:-ml-40 w-full top-100">
          {testimonials.map((t, i) => {
            const position =
              (i - index + testimonials.length) % testimonials.length;
            let wrapperClasses =
              "absolute rounded-2xl w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] transition-all duration-700 ease-in-out";

            if (position === 0) {
              wrapperClasses += " z-20 scale-105 opacity-100";
            } else if (position === 1) {
              wrapperClasses += " z-10 translate-x-1/2 scale-90 opacity-50";
            } else {
              wrapperClasses += " z-10 -translate-x-1/2 scale-90 opacity-50";
            }

            return (
              <div key={i} className={wrapperClasses}>
                <div className="rounded-[inherit] w-full h-full p-6 bg-white/5 shadow-xl flex flex-col justify-between backdrop-blur-md border border-white/10 mt-40 md:mt-60">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p
                        className={`font-semibold text-red-600 ${urban.className}`}
                      >
                        {t.name}
                      </p>
                      <p
                        className={`text-sm text-gray-300 ${outfit.className}`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-2 ${urban.className}`}
                  >
                    {t.title}
                  </h3>

                  <div className="flex text-yellow-400 mb-3 text-lg">
                    {"★".repeat(t.rating)}
                  </div>

                  <p
                    className={`text-gray-300 text-sm sm:text-base ${outfit.className}`}
                  >
                    {t.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
