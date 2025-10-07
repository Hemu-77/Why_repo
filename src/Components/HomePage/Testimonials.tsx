"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ReflectedTestimonials() {
  const testimonials = [
    {
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      img: "/images/user1.png",
      title: "Best of Best Media",
      rating: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free.",
    },
    {
      name: "Sophia Johnson",
      role: "Product Manager",
      img: "/images/user2.png",
      title: "Best of Best Media",
      rating: 5,
      text: "This service has transformed how I manage payments for my team. The ease of use and reliability are unmatched. Highly recommend to anyone who values efficiency.",
    },
    {
      name: "Liam Brown",
      role: "Business Owner",
      img: "/images/user3.png",
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

  // Auto slide (same as before)
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

  // 🔹 Animate text + buttons
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
      className="relative flex flex-col items-center justify-center bg-black text-white lg:py-30 px-6 overflow-hidden transform scale-x-[-1]"
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto transform scale-x-[-1]">
        {/* Left Text Content */}
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-6 space-y-4">
        <p
  ref={(el) => {
    if (el) textRefs.current[0] = el; // assign by index, not push
  }}
>
  Testimonial
</p>

          <h2
            ref={headingRef}
            className="text-4xl font-bold leading-snug mb-3"
          >
            We’ve built trust with <br /> reviews from real users
          </h2>

          <p
  ref={(el) => {
    if (el) textRefs.current[1] = el; 
  }}
>
            Boost your credibility by featuring genuine testimonials from real
            users, showcasing their positive experiences and satisfaction with
            Monks Pay services.
          </p>

          {/* Buttons below the text */}
          <div className="mt-14 flex gap-4">
            <button
              ref={(el) => {
                if (el) buttonRefs.current[1] = el; 
              }}
              onClick={handlePrev}
              className="w-15 h-15 flex items-center justify-center rounded-full backdrop-blur-2xl bg-white/10 hover:bg-red-600 text-white font-bold transition text-2xl"
            >
              &lt;
            </button>
            <button
              ref={(el) => {
                if (el) buttonRefs.current[1] = el; 
              }}
              onClick={handleNext}
              className="w-15 h-15 flex items-center justify-center rounded-full backdrop-blur-2xl bg-white/10 hover:bg-red-600 text-white font-bold transition text-2xl"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Carousel (unchanged) */}
        <div className="relative flex-2 flex justify-center items-center h-[380px]">
          {testimonials.map((t, i) => {
            const position = (i - index + testimonials.length) % testimonials.length;
            let wrapperClasses =
              "absolute rounded-2xl w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] transition-all duration-700 ease-in-out";

            if (position === 0) {
              wrapperClasses += " z-20 scale-105 opacity-100";
            } else if (position === 1) {
              wrapperClasses += " z-10 translate-x-1/2 scale-90 opacity-50";
            } else {
              wrapperClasses += " z-10 -translate-x-1/2 scale-90 opacity-50";
            }

            return (
              <div key={i} className={wrapperClasses}>
                <div className="rounded-[inherit] w-full h-full p-6 bg-black/30 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-red-400">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{t.title}</h3>
                  <div className="flex text-yellow-400 mb-3">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-gray-300 text-[15px] font-outfit font-[400]">
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
