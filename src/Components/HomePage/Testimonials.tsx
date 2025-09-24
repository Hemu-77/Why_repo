"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handlers for manual scroll
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-black text-white lg:py-30 px-6 overflow-hidden transform scale-x-[-1]">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto transform scale-x-[-1]">
        {/* Left Text Content */}
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-6">
          <p className="text-red-500 font-semibold uppercase mb-2">Testimonial</p>
          <h2 className="text-4xl font-bold leading-snug mb-3">
            We’ve built trust with <br /> reviews from real users
          </h2>
          <p className="text-white mb-4 text-sm">
            Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction with Monks Pay services.
          </p>

          {/* Buttons below the text */}
          <div className="mt-14 flex gap-4">
  <button
    onClick={handlePrev}
    className="w-15 h-15 flex items-center justify-center rounded-full backdrop-blur-2xl bg-white/10 hover:bg-red-600 text-white font-bold transition text-2xl"
  >
    &lt;
  </button>
  <button
    onClick={handleNext}
    className="w-15 h-15 flex items-center justify-center rounded-full backdrop-blur-2xl bg-white/10 hover:bg-red-600 text-white font-bold transition text-2xl"
  >
    &gt;
  </button>
</div>

        </div>

        {/* Right Carousel */}
        <div className="relative flex-2 flex justify-center items-center h-[380px]">
          {testimonials.map((t, i) => {
            const position = (i - index + testimonials.length) % testimonials.length;

            // Gradient border wrapper
            let wrapperClasses =
              "absolute p-[2px] rounded-2xl bg-gradient-to-b from-[#000000] to-[#F52727] transition-all duration-700 ease-in-out w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]";

            // // Inner card: fully transparent + backdrop blur
            const innerClasses =
              "rounded-2xl p-6 shadow-xl bg-black transition-all duration-700";

            if (position === 0) {
              wrapperClasses += " z-20 scale-105 opacity-100";
            } else if (position === 1) {
              wrapperClasses += " z-10 translate-x-1/2 scale-90 opacity-50";
            } else {
              wrapperClasses += " z-10 -translate-x-1/2 scale-90 opacity-50";
            }

            return (
              <div key={i} className={wrapperClasses}>
                <div className={innerClasses}>
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
                  <p className="text-gray-300 text-[15px] font-outfit font-[400]">{t.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
