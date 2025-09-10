import React from "react";
import HeroSection from "@/Components/HomePage/HeroSection";
import HowSection from "@/Components/HomePage/ButHowSection";
import ReflectedServices from "@/Components/HomePage/WhatWeOffer";
import NewsletterFooter from "@/Components/Common/footer";
import FAQSection from "@/Components/Common/questionsAndAnswers";
import ReflectedTestimonials from "@/Components/HomePage/Testimonials";


const HomePage = () => {
  return(
    <div>
        <HeroSection/>
        <HowSection/>
        <ReflectedServices/>
        <ReflectedTestimonials/>
        <FAQSection/>
        <NewsletterFooter/>
    </div>
  )
}

export default HomePage