"use client";

import { useState } from "react";
import PortfolioSection from "@/Components/Portfolio/HeroSection";
import VideoSection from "@/Components/Portfolio/Videos";
import CaseStudySection from "@/Components/Portfolio/CaseStudySection";
import GallerySection from "@/Components/Portfolio/GallerySection";
import Cards from "@/Components/Portfolio/Cards";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("portfolio");

  // Function to render the current section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "portfolio":
        return (
          <>
            <PortfolioSection key="portfolio" />
            <VideoSection />
          </>
        );
      case "case-studies":
        return(
            <>
             <CaseStudySection key="case-studies" />
             <Cards/>
            </>
        );
      case "gallery":
        return <GallerySection key="gallery" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      
      <div className="flex gap-4 mt-25">
        <button
          onClick={() => setActiveSection("portfolio")}
          className={`px-6 py-2 rounded-full transition ${
            activeSection === "portfolio"
              ? "bg-red-500 text-white"
              : "bg-white/20 text-gray-200 hover:bg-red-500/70"
          }`}
        >
          Portfolio
        </button>

        <button
          onClick={() => setActiveSection("case-studies")}
          className={`px-6 py-2 rounded-full transition ${
            activeSection === "case-studies"
              ? "bg-red-500 text-white"
              : "bg-white/20 text-gray-200 hover:bg-red-500/70"
          }`}
        >
          Case Studies
        </button>

        <button
          onClick={() => setActiveSection("gallery")}
          className={`px-6 py-2 rounded-full transition ${
            activeSection === "gallery"
              ? "bg-red-500 text-white"
              : "bg-white/20 text-gray-200 hover:bg-red-500/70"
          }`}
        >
          Gallery
        </button>
      </div>

      {/* Section Render */}
      <div className="w-full">{renderActiveSection()}</div>
    </div>
  );

}
