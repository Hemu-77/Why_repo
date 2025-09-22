"use client";

import React from "react";
import Link from "next/link";

interface FooterPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterPageLayout({ title, children }: FooterPageLayoutProps) {
  return (
    <section className="min-h-screen bg-black text-white px-6 lg:px-16 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 border-b border-gray-700 pb-4">
          {title}
        </h1>

        {/* Page Content */}
        <div className="text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>

        {/* Back to Home Button */}
        <div className="pt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
