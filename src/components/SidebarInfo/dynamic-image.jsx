import Image from "next/image";

/* Brand image swap — the brand graphic holds for most of an 8s loop, then
   blurs/scales back while the grayscale portrait wipes in from the top; a
   diagonal gloss sweeps across at each swap. Pauses while hovered.
   Pure CSS keyframes (tailwind.config.js: ks-img-a / ks-img-b / ks-sweep). */
const DynamicImage = () => {
  return (
    <div className="group relative w-[158px] aspect-[480/525] rounded-lg overflow-hidden isolate bg-black">
      <Image
        src="/brand-component.png"
        width={158}
        height={173}
        alt="Kanchon Sarker — UX Designer"
        className="absolute inset-0 w-full h-full object-contain z-[1] animate-ks-img-a group-hover:[animation-play-state:paused] motion-reduce:animate-none will-change-[opacity,transform,filter,clip-path]"
      />
      <Image
        src="/brand-portrait.png"
        width={158}
        height={173}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain z-[2] opacity-0 animate-ks-img-b group-hover:[animation-play-state:paused] motion-reduce:animate-none will-change-[opacity,transform,filter,clip-path]"
      />
      {/* gloss sweep */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3] pointer-events-none mix-blend-overlay opacity-0 animate-ks-sweep group-hover:[animation-play-state:paused] motion-reduce:hidden"
        style={{
          background:
            "linear-gradient(110deg, transparent 38%, rgba(255,255,255,0.55) 50%, transparent 62%)",
        }}
      />
    </div>
  );
};

export default DynamicImage;
