import React from "react";
import HeroSection from "@/Components/HomePage/HeroSection";
import HowSection from "@/Components/HomePage/ButHowSection";
import ReflectedServices from "@/Components/HomePage/WhatWeOffer";
import NewsletterFooter from "@/Components/Common/footer";
import FAQSection from "@/Components/Common/questionsAndAnswers";
import ReflectedTestimonials from "@/Components/HomePage/Testimonials";
import BrandsSection from "@/Components/HomePage/BrandPages";
import Navbar from "@/Components/Common/navbar";
import VideoSection from "@/Components/HomePage/VideoSection";


const HomePage = () => {
  return(
    <div className="bg-black">
        <Navbar/>
        <HeroSection/>
        <HowSection/>
        <ReflectedServices/>
        <BrandsSection/>
        <VideoSection/>
        <ReflectedTestimonials/>
        <FAQSection/>
        <NewsletterFooter/>
    </div>
  )
}

export default HomePage