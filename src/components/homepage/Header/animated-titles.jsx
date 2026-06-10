"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useEffect, useRef, useState } from "react";

const AnimatedTitles = ({ titles, className }) => {
  if (titles.length === 0) {
    return null;
  }

  const longestTitle = titles.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
  const titleArr = [...titles, titles[0]];
  const titleWrapperRef = useRef(null);
  const plusRef = useRef(null);
  const [plusLeft, setPlusLeft] = useState(0);
  // bumped on resize (debounced) so the animation re-measures and rebuilds
  const [resizeTick, setResizeTick] = useState(0);

  useEffect(() => {
    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setResizeTick((tick) => tick + 1), 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useGSAP(
    () => {
      const wrapper = titleWrapperRef.current;
      if (!wrapper) return;
      const childCount = wrapper.children?.length ?? 0;
      if (childCount < 2) return;
      const childHeight = wrapper.clientHeight / childCount;
      let longestChildWidth = 0;
      for (let i = 0; i < childCount; i++) {
        const childWidth = wrapper.children[i].clientWidth;
        if (childWidth > longestChildWidth) {
          longestChildWidth = childWidth;
        }
      }
      setPlusLeft(wrapper.children[0].clientWidth);
      const steps = childCount - 1;
      const move = 1;
      gsap.set(wrapper, { y: 0 });
      const tl = gsap.timeline({ repeat: -1 });
      for (let i = 1; i <= steps; i++) {
        const childWidth = wrapper.children[i].clientWidth;
        tl.to(wrapper, {
          y: -childHeight * i,
          duration: move,
          ease: "power2.inOut",
          delay: 2,
          onStart: () => {
            setPlusLeft(childWidth);
          },
        });
      }
    },
    { dependencies: [titles.length, resizeTick], revertOnUpdate: true },
  );

  return (
    <span className={cn("relative inline-flex", className)}>
      <div className="relative overflow-hidden">
        <span className="opacity-0">{longestTitle + "a"}</span>
        <span
          className="absolute top-0 left-0 flex flex-col items-start"
          ref={titleWrapperRef}
        >
          {titleArr.map((title, index) => (
            <span key={index}>{title}</span>
          ))}
        </span>
      </div>
      <span
        className={cn(
          "absolute top-[60%] -translate-y-1/2 transition-all duration-1000",
          plusLeft === 0 && "hidden",
        )}
        style={{
          left: `${plusLeft + 10}px`,
        }}
        ref={plusRef}
      >
        +
      </span>
    </span>
  );
};

export default AnimatedTitles;
