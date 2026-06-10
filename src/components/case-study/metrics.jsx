import Reveal from "@/components/common/Reveal";

const CaseMetrics = ({ data }) => {
  return (
    <section className="py-[120px]">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <div className="mb-16 max-w-[720px]">
            <h3 className="text-[clamp(32px,4.5vw,56px)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
              {data.title}
            </h3>
            <p className="mt-5 text-[17px] leading-[1.55] text-white/60 max-w-[58ch]">
              {data.sub}
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-12 max-[900px]:gap-7">
          {data.items.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <div className="flex flex-col gap-3.5 border-t border-white/10 pt-7">
                <p className="font-jetbrains text-[11px] tracking-[0.14em] uppercase text-[#4ADE80] font-semibold">
                  {m.label}
                </p>
                <p className="text-[clamp(52px,6vw,84px)] font-extrabold tracking-[-0.035em] leading-none text-white">
                  {m.value}
                  <span className="text-[0.45em] text-[#4ADE80] font-bold ml-1 tracking-normal">
                    {m.unit}
                  </span>
                </p>
                <p className="text-[14px] leading-[1.55] text-white/60">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseMetrics;
