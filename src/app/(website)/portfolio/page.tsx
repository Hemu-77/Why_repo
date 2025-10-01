import React from "react";
import PortfolioSection from "@/Components/Portfolio/HeroSection";
import VideoSection from "@/Components/Portfolio/Videos";
import NewsletterFooter from "@/Components/Common/footer";



const Portfolio = () => {
    return(
        <div className="bg-black">
            <PortfolioSection/>
            <VideoSection/>
            <div>
            <NewsletterFooter/>
            </div>
            
        </div>
    )
}


export default Portfolio