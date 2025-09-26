"use client";

import React from "react";
import { Montserrat,Outfit, DM_Sans } from "next/font/google";



const montserrat = Montserrat({
  weight : ["500"],
  subsets: ["latin"],
  display: "swap",

})

const outfit = Outfit({
  weight : ["500"],
  subsets: ["latin"],
  display: "swap",

})

const inter = DM_Sans({
  weight : ["600"],
  subsets: ["latin"],
  display: "swap",

})

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
        <h2 className="text-4xl md:text-6xl lg:text-[64px] font-[600] mb-12 relative inline-block font-Konnect text-black/50 stroke-white">
          <span className={`stroke-blur ${inter.className}`}>
            About Our Company
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl p-[2px] shadow-lg 
               bg-gradient-to-b from-[#80FBFF] to-black"
            >
              <div className="rounded-xl bg-gradient-to-br from-black via-black to-[#5b0808] 
//                  p-6 text-left hover:shadow-red-600/30 transition duration-300 lg:h-[230px]">
              <h3 className={`text-[36px] font-bold mb-3 ${montserrat.className}`}>
                {item.id}. {item.title}
              </h3>
              <p className={`text-base text-gray-500 leading-relaxed font-semibold ${outfit.className}`}>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{items.map((item) => (
  // This outer div creates the gradient border effect.
  <div
    key={item.id}
    className="relative rounded-xl p-[2px] shadow-lg
               bg-gradient-to-b from-[#80FBFF] to-black"
  >
    {/* This inner div contains the content and the inner gradient. */}
//     <div
//       className="rounded-xl bg-gradient-to-br from-black via-black to-[#5b0808] 
//                  p-6 text-left hover:shadow-red-600/30 transition duration-300"
//     >
//       <h3 className="text-3xl font-bold mb-3 text-white">
//         {item.id}. {item.title}
//       </h3>
//       <p className="text-sm text-gray-300 leading-relaxed font-semibold">
//         {item.desc}
//       </p>
//     </div>
//   </div>
// ))}
// </div> */}