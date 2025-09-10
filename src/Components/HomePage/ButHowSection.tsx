"use client";

import { Play, Link, ArrowRight } from 'lucide-react';
import img2 from "../../../public/img2.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Character placeholder */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-80 h-96 flex items-center justify-center">
              {/* Image placeholder - replace src with your image */}
              <img 
                src={img2}
                alt="Character" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black tracking-wider">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  BUT
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 drop-shadow-2xl">
                  HOW
                </span>
                <span className="text-red-500 ml-4 text-7xl lg:text-9xl">?</span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-bold text-gray-300 tracking-wide">
                BHAI NE BOLA KARNE KA, TO KARNE KA !!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              {[
                { text: "STRATEGY FIRST", delay: "0ms" },
                { text: "CONVERSION COPY", delay: "100ms" },
                { text: "PRO-GRADE PRODUCTION", delay: "200ms" },
                { text: "CONTENT REPURPOSING", delay: "300ms" }
              ].map((item, index) => (
                <button
                  key={index}
                  className="group w-full lg:w-96 h-16 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex items-center justify-center gap-3 px-8 py-4">
                    <Link className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-white font-bold text-lg tracking-wide">
                      {item.text}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Play Sample Button */}
        <div className="fixed bottom-8 right-8 z-20">
          <button className="group relative w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center justify-center h-full">
              <Play className="w-6 h-6 text-white mb-1 group-hover:scale-110 transition-transform duration-300" fill="white" />
              <span className="text-xs text-white font-medium">Play Sample</span>
            </div>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}