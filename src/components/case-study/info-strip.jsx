import Reveal from "@/components/common/Reveal";

const InfoStrip = ({ data }) => {
  return (
    <section className="py-[50px] md:py-[100px] bg-[#1a3d8a] relative overflow-hidden">
      <div className="case-container relative z-[1]">
        <Reveal>
          <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-10 max-w-[560px]">
            {data.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-10">
          {data.cols.map((col, i) => (
            <Reveal key={col.label} delay={(i + 1) * 90}>
              <p className="font-jetbrains text-[10px] font-bold tracking-[0.14em] uppercase text-white/50 mb-3">
                {col.label}
              </p>
              <p className="text-[14px] leading-[1.65] text-white/75">
                {col.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;
