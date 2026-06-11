import Reveal from "@/components/common/Reveal";

const PhoneSet = ({ screens, ariaHidden = false }) => (
  <div
    className="flex gap-9 max-[760px]:gap-6 shrink-0"
    aria-hidden={ariaHidden}
  >
    {screens.map((s, i) => (
      <figure
        key={i}
        className="relative shrink-0 w-[248px] max-[760px]:w-[188px] aspect-[970/2100] rounded-[38px] bg-[#0c0c0c] p-1.5 border border-white/10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_24px_60px_-20px_rgba(0,0,0,0.55),0_8px_20px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:border-[#4ADE80]/35 hover:shadow-[0_0_0_1px_rgba(74,222,128,0.2)_inset,0_34px_80px_-20px_rgba(0,0,0,0.7),0_0_60px_-20px_rgba(74,222,128,0.35)] before:content-[''] before:absolute before:top-2.5 before:left-1/2 before:-translate-x-1/2 before:w-[46%] before:h-4 before:bg-black before:rounded-xl before:z-[2]"
      >
        <img
          src={s.src}
          alt={ariaHidden ? "" : s.alt}
          loading="lazy"
          className="w-full h-full object-cover rounded-[32px] block"
        />
      </figure>
    ))}
  </div>
);

/* Auto-scrolling strip of phone screenshots — pauses while hovered. */
const ScreensMarquee = ({ data }) => {
  return (
    <section
      className="group relative py-[50px] md:py-[120px] border-t border-white/5 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 480px at 50% 0%, rgba(74,222,128,0.05), transparent 70%), #0c0c0c",
      }}
    >
      <div className="case-container md:mb-[72px] mb-12">
        <Reveal>
          <div className="max-w-[640px]">
            <p className="font-jetbrains text-[11px] tracking-[0.18em] uppercase text-[#4ADE80] font-semibold mb-[18px]">
              {data.eyebrow}
            </p>
            <h2 className="text-[clamp(32px,4.2vw,52px)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
              {data.title}
            </h2>
            <p className="mt-[18px] text-[16px] leading-[1.6] text-white/50 max-w-[56ch]">
              {data.sub}
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="relative overflow-hidden py-2"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-9 max-[760px]:gap-6 animate-marquee-screens motion-reduce:animate-none will-change-transform">
          <PhoneSet screens={data.screens} />
          <PhoneSet screens={data.screens} ariaHidden />
        </div>
      </div>
    </section>
  );
};

export default ScreensMarquee;
