import React from "react";
import ContactSection from "@/Components/ContactUs/ContactUs";
import NewsletterFooter from "@/Components/Common/footer";
import Navbar from "@/Components/Common/navbar";

const ContactUs = () => {
    return(
        <div className="bg-black">
            <Navbar/>
            <ContactSection/>
            <NewsletterFooter/>
        </div>
    )
}

export default ContactUs