"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterFooter() {
  const footerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-top", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%", // animate when 80% of viewport
        },
      });

      gsap.from(".footer-links > div", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#111] text-white mx-4 lg:my-10 rounded-2xl md:mx-20 -my-7"
    >
      <div className="max-w-7xl mx-auto p-10 md:p-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center footer-top">
          {/* Left Side */}
          <div>
            <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mb-6">
              <span className="text-2xl" role="img" aria-label="newsletter">
                📩
              </span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight mb-2 md:text-6xl">
              Keep up with the latest
            </h2>
            <p className="text-gray-400 text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-m font-bold mb-3">Stay up to date</p>
            <form className="flex flex-col gap-2 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing you agree to our{" "}
              <Link
                href="/footer/legal/privacypolicy"
                className="underline text-white hover:text-red-400"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 text-sm footer-links">
          <div>
            <h4 className="font-semibold mb-3">WHYMEDIA</h4>
            <p className="text-gray-500">Make your complicated</p>
          </div>

          <FooterColumn
            title="Kindernest"
            links={[
              { href: "/footer/kindernest/payment", label: "Payment" },
              { href: "/footer/kindernest/card", label: "Card" },
              { href: "/footer/kindernest/pricing", label: "Pricing" },
            ]}
          />

          <FooterColumn
            title="Products"
            links={[
              { href: "/footer/products/personal", label: "Personal" },
              { href: "/footer/products/business", label: "Business" },
              { href: "/footer/products/invoices", label: "Invoices" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/footer/company/careers", label: "Careers" },
              { href: "/footer/company/presskit", label: "Press Kit" },
            ]}
          />

          <FooterColumn
            title="Developer"
            links={[
              { href: "/footer/developer/document", label: "API Documentation" },
              { href: "/footer/developer/guide", label: "Guide" },
              { href: "/footer/developer/changelog", label: "Change Log" },
            ]}
          />

          <FooterColumn
            title="Community"
            links={[
              { href: "/footer/community/referfriend", label: "Refer a Friend" },
              { href: "/footer/community/gift", label: "Gift" },
            ]}
          />

          <FooterColumn
            title="Support"
            links={[
              { href: "/footer/support/help", label: "Help" },
              { href: "/footer/support/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { href: "/footer/legal/privacypolicy", label: "Privacy Policy" },
              { href: "/footer/legal/termsofservices", label: "Terms of Services" },
              { href: "/footer/legal/cookies", label: "Cookies" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

/* Reusable Footer Column */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-gray-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
