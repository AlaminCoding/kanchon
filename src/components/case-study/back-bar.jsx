"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/* Fixed back bar — transparent at top, gains a blurred dark background
   as the page scrolls. */
const BackBar = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOpacity(Math.min(1, window.scrollY / 200) * 0.88);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] px-12 max-[900px]:px-6 py-5 max-[900px]:py-4 flex items-center backdrop-blur-[12px]"
      style={{ background: `rgba(12,12,12,${opacity})` }}
    >
      <Link
        href="/"
        className="group flex items-center gap-2.5 hover:gap-[13px] text-white/50 hover:text-white font-jetbrains text-[12px] font-medium tracking-[0.12em] uppercase transition-[color,gap] duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)]"
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="w-3.5 h-3.5 transition-transform duration-[350ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-x-[3px]"
        >
          <path d="M8.5 2L3.5 7l5 5" />
        </svg>
        Back to Homepage
      </Link>
    </div>
  );
};

export default BackBar;
