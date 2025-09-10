"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why is social media presence important in today’s world?",
    answer:
      "It enables direct engagement with the audience, expands global reach, enhances brand visibility and credibility, and provides valuable insights into consumer behavior.",
  },
  {
    question: "How can we get more business after creating content on social media?",
    answer: "By optimizing content for engagement, running campaigns, and tracking performance metrics.",
  },
  {
    question: "Will you help in even distribution of content?",
    answer: "Yes, we ensure fair content distribution across all major platforms.",
  },
  {
    question: "Where can I see some of the social media accounts which you handle?",
    answer: "We can share a portfolio of accounts we manage upon request.",
  },
  {
    question: "Do you have a studio for shooting videos?",
    answer: "Yes, we provide full studio facilities for professional video production.",
  },
  {
    question: "What cameras and microphone do you use for shoots?",
    answer: "We use industry-grade cameras and microphones to ensure high quality output.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Got Questions?
          <br />
          We’ve Got{" "}
          <span className="bg-red-600 px-2 text-white shadow-md">Answers!</span>
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="text-red-500 w-5 h-5" />
              ) : (
                <Plus className="text-red-500 w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Card */}
      <div className="bg-[#111] rounded-2xl mt-16 p-8 text-center max-w-3xl mx-auto">
        {/* Example avatars */}
        <div className="flex justify-center -space-x-3 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        </div>

        <h3 className="text-lg font-semibold text-red-500 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-400 mb-4">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition">
          Get in touch
        </button>
      </div>
    </section>
  );
}
