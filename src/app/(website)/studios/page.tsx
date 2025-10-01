import React from "react";
import StudioPage from "@/Components/Studios/HeroSection"
import NewsletterFooter from "@/Components/Common/footer";
import PodcastLayout from "@/Components/Studios/PhotoSection";

const Studio = () => {
    return(
        <div className="bg-black">
            <StudioPage/>
            <PodcastLayout/>
            <NewsletterFooter/>
        </div>
    )
}

export default Studio


