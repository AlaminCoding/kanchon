"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CaseFeatures = ({ data }) => {
  const scope = useRef(null);
  const pinRef = useRef(null);
  const videoRefs = useRef({});
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      // pin the phone wrap only on desktop — on mobile the phone stacks below
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: scope.current,
          start: "top 58px",
          end: "bottom bottom",
          pin: pinRef.current,
        });
      });

      // each item owns the middle band of the viewport while it is active
      const items = gsap.utils.toArray(".feature-item", scope.current);
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope },
  );

  // autoplay the active item's video, pause the rest
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, video]) => {
      if (!video) return;
      if (Number(index) === active) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  return (
    <section className="bg-[#111]">
      <div
        ref={scope}
        className="case-container grid md:grid-cols-[1fr_480px] relative"
      >
        {/* LEFT — scrolling feature copy */}
        <div className="py-[50px] md:pt-[100px] md:pb-[300px]">
          <p className="font-jetbrains text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-4">
            {data.eyebrow}
          </p>

          <h2 className="text-[36px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-[50px] md:mb-20">
            {data.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>

          {data.items.map((f) => (
            <div
              key={f.number}
              className="feature-item py-10 md:py-[88px] border-t border-white/5 md:last:border-b"
            >
              <p className="font-jetbrains text-[11px] font-semibold tracking-[0.1em] text-white/20 mb-4">
                {f.number}
              </p>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] text-white mb-3.5">
                {f.name}
              </h3>
              <p className="text-[15px] leading-[1.65] text-white/45 max-w-[400px]">
                {f.desc}
              </p>
              <div className="relative w-[270px] h-[550px] mx-auto rounded-[20px] bg-[#1a1a1a] overflow-hidden border-[3px] border-white mt-10 md:hidden">
                <div className="absolute top-5 left-1/2 w-20 h-5 bg-black rounded-full z-10 -translate-x-1/2" />
                {f.screen.type === "video" ? (
                  <video
                    key={f.number}
                    src={f.screen.src}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px] transition-opacity duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  />
                ) : (
                  <Image
                    key={f.number}
                    src={f.screen.src}
                    width={410}
                    height={450}
                    alt={f.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px] transition-opacity duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — pinned phone */}
        <div className="relative max-md:hidden">
          <div ref={pinRef} className="h-screen flex items-center justify-end">
            <div className="relative w-[272px] h-[556px] rounded-[44px] bg-[#1a1a1a] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_rgba(0,0,0,0.6),0_0_0_8px_#222,0_0_0_9px_rgba(255,255,255,0.04)] before:content-[''] before:absolute before:top-2.5 before:left-1/2 before:-translate-x-1/2 before:w-[72px] before:h-[22px] before:bg-black before:rounded-xl before:z-10">
              {data.items.map((f, i) => {
                const screenClasses = cn(
                  "absolute inset-0 w-full h-full object-cover rounded-[44px] transition-opacity duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                  active === i
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none",
                );
                return f.screen.type === "video" ? (
                  <video
                    key={f.number}
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={f.screen.src}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={screenClasses}
                  />
                ) : (
                  <img
                    key={f.number}
                    src={f.screen.src}
                    alt={f.name}
                    className={screenClasses}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseFeatures;
