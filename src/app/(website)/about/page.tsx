import React from "react";
import HeroSection from "@/Components/AboutUs/HeroSection";
import AboutCompany from "@/Components/AboutUs/AboutOurCompany";
import ValuesSection from "@/Components/AboutUs/Values";
import Navbar from "@/Components/Common/navbar";
import FAQSection from "@/Components/Common/questionsAndAnswers";
import NewsletterFooter from "@/Components/Common/footer";

const About = () => {
    return(
        <div className="bg-black">
            <Navbar/>
            <HeroSection/>
            <AboutCompany/>
            <ValuesSection/>
            <FAQSection/>
            <NewsletterFooter/>
        </div>
    )
}

export default About