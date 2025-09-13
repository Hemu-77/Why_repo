"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Send } from "lucide-react";
import img1 from "../../../public/header.png"

export default function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6 md:px-20"
      style={{ backgroundImage: `url(${img1.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Top grid: Heading + Form */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <p className="text-red-500 text-2xl font-semibold mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-snug">
              Get in touch with us.
              <br /> We’re here to assist you.
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#222]/70 hover:bg-red-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#222]/70 hover:bg-red-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#222]/70 hover:bg-red-600 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-300">Your Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-red-500 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-red-500 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300">Phone Number (optional)</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-red-500 py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={3}
                  className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-red-500 py-2"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-medium shadow-lg hover:scale-105 transition"
              >
                <Send className="w-4 h-4" />
                LEAVE A MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info - Centered in one row */}
        <div className="mt-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-300 leading-relaxed">
                3rd Floor, bewakoof building 17th Cross Rd, opp. Allen Solly,
                Sector 6, HSR Layout, Bengaluru, Karnataka 560102
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email Address</h4>
              <p>-----</p>
              <p className="text-gray-300">business@whymedia.in</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Number</h4>
              <p>-----</p>
              <p className="text-gray-300">+91 9035460096</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
