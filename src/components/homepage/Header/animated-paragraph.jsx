"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedParagraph = ({ text, className }) => {
  const paraRef = useRef(null);
  const wordArray = text.split(" ");

  useGSAP(
    () => {
      const words = paraRef.current.querySelectorAll("span");
      gsap.to(words, {
        color: "rgba(255, 255, 255, 0.8)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
    },
    { scope: paraRef },
  );

  return (
    <p
      className={cn(
        "text-sm lg:text-[19px] font-[300] leading-[160%] text-white/70 font-interTight max-w-[650px]",
        className,
      )}
      ref={paraRef}
    >
      {wordArray.map((word, idx) => (
        <span key={idx + word} className="text-white/40">
          {word + " "}
        </span>
      ))}
    </p>
  );
};

export default AnimatedParagraph;
