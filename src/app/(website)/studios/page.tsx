import React from "react";
import StudioPage from "@/Components/Studios/HeroSection"
import NewsletterFooter from "@/Components/Common/footer";
import PodcastLayout from "@/Components/Studios/PhotoSection";
import Navbar from "@/Components/Common/navbar";

const Studio = () => {
    return(
        <div className="bg-black">
            <Navbar/>
            <StudioPage/>
            <PodcastLayout/>
            <NewsletterFooter/>
        </div>
    )
}

export default Studio


