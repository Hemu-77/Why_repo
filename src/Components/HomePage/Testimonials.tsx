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
      title: "Smooth Transactions",
      rating: 5,
      text: "This service has transformed how I manage payments for my team. The ease of use and reliability are unmatched. Highly recommend to anyone who values efficiency.",
    },
    {
      name: "Liam Brown",
      role: "Business Owner",
      img: "/images/user3.png",
      title: "Reliable & Transparent",
      rating: 5,
      text: "Finally, a platform I can trust. No hidden surprises, just clear and reliable service every time. My customers love it too.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // slide every 4s
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative flex items-center justify-center bg-black text-white py-12 px-6 overflow-hidden transform scale-x-[-1]">
      {/* Flip children back */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto transform scale-x-[-1]">
        
        {/* Left Text Content */}
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-6">
          <p className="text-red-500 font-semibold uppercase mb-2">Testimonial</p>
          <h2 className="text-4xl font-bold leading-snug mb-3">
            We’ve built trust with <br /> reviews from real users
          </h2>
          <p className="text-gray-400 mb-4 text-sm">
            Boost your credibility by featuring genuine testimonials from real users, showcasing their positive experiences and satisfaction.
          </p>
        </div>

        {/* Right Carousel */}
        <div className="flex-1 relative overflow-hidden h-[360px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => {
              const isActive = i === index;
              return (
                <div
                  key={i}
                  className={`min-w-full flex justify-center`}
                >
                  <div
                    className={`w-[320px] rounded-2xl p-6 shadow-xl transition-all duration-700 ${
                      isActive
                        ? "bg-gradient-to-b from-gray-900 to-black scale-105 opacity-100 blur-0 z-10"
                        : "bg-gray-800 scale-95 opacity-50 blur-sm"
                    }`}
                  >
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
                    <h3 className="text-lg font-bold mb-2">{t.title}</h3>
                    <div className="flex text-yellow-400 mb-3">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-gray-300 text-sm">{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
