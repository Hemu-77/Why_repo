"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const PageTransitionWrapper = ({ children }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!showAnimation) return;

    const svgs = document.querySelectorAll(".revealer svg");
    gsap.set(".revealer", { opacity: 1 });
    gsap.set(svgs, { scale: 0.8, opacity: 0, transformOrigin: "50% 50%" });

    gsap.to(svgs, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      stagger: 0.15,
    });

    const delays = [0.2, 0.6, 1];

    svgs.forEach((el, i) => {
      gsap.to(el, {
        scale: 150,
        duration: 1,
        delay: delays[i],
        ease: "power4.inOut",
        onComplete: () => {
          if (i === svgs.length - 1) {
            setTimeout(() => setShowAnimation(false), 20);
          }
        },
      });
    });
  }, [showAnimation]);

  return (
    <>
      {showAnimation && (
        <div className="fixed inset-0 w-full h-screen bg-black z-[9999] flex items-center justify-center overflow-hidden">
          {["white", "#FF3F3F", "black"].map((color, idx) => (
            <div
              key={idx}
              className="revealer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M36.0718 23.0444C30.1828 22.477 25.523 17.8194 24.9563 11.9354L24 2L23.0437 11.9354C22.477 17.8204 17.8172 22.478 11.9282 23.0444L2 24L11.9282 24.9556C17.8172 25.523 22.477 30.1806 23.0437 36.0646L24 46L24.9563 36.0646C25.523 30.1796 30.1828 25.522 36.0718 24.9556L46 24L36.0718 23.0444Z"
                  fill={color}
                />
              </svg>
            </div>
          ))}
        </div>
      )}
      {children}
    </>
  );
};

export default PageTransitionWrapper;
