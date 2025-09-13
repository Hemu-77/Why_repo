import React from "react";
import HeroSection from "@/Components/AboutUs/HeroSection";
import AboutCompany from "@/Components/AboutUs/AboutOurCompany";
import ValuesSection from "@/Components/AboutUs/Values";

const About = () => {
    return(
        <div>
            <HeroSection/>
            <AboutCompany/>
            <ValuesSection/>
        </div>
    )
}

export default About