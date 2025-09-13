"use client";

import React from "react";

const AboutCompany = () => {
  const items = [
    {
      id: "01",
      title: "Why Choose Us",
      desc: "Whymedia stands out for its commitment to excellence, passion for media, and a dedicated team that brings your vision to life with unmatched ...",
    },
    {
      id: "02",
      title: "Our Mission",
      desc: `"Our mission at Whymedia is to empower brands and individuals by delivering exceptional video production, post-production, and distribution services. We strive to create high-quality, engaging, and visually ."`,
    },
    {
      id: "03",
      title: "Our Vision",
      desc: `"To be the leading 360° media company that transforms ideas into impactful visual stories, driving innovation and growth for businesses worldwide."`,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-[84rem] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 relative inline-block">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            About Our Company
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-700 bg-gradient-to-b from-black via-gray-900 to-red-900 p-6 text-left shadow-lg hover:shadow-red-600/30 transition"
            >
              <h3 className="text-3xl font-bold mb-3 ">
                {item.id}. {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
