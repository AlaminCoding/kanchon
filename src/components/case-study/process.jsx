import Reveal from "@/components/common/Reveal";

const CaseProcess = ({ data }) => {
  return (
    <section className="pt-[50px] pb-5 md:py-[120px]">
      <div className="case-container">
        <div className="mb-10 md:mb-16">
          <Reveal>
            <p className="font-jetbrains text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 mb-5">
              {data.label}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-[36px] font-bold tracking-[-0.01em] leading-[1.2] text-white">
              {data.heading}
            </h2>
          </Reveal>
        </div>

        {data.steps.map((step) => (
          <Reveal key={step.num}>
            <div className="grid grid-cols-[56px_1fr] max-[560px]:grid-cols-[40px_1fr] gap-8 max-[560px]:gap-4 py-9 border-t border-white/5 md:last:border-b items-start">
              <p className="font-jetbrains text-[11px] font-bold text-white/20 tracking-[0.08em] pt-1">
                {step.num}
              </p>
              <div>
                <p className="font-jetbrains text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-2">
                  {step.phase}
                </p>
                <h3 className="text-[20px] font-bold tracking-[-0.01em] text-white mb-3">
                  {step.name}
                </h3>
                <p className="text-[14px] leading-[1.65] text-white/45 max-w-[560px]">
                  {step.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CaseProcess;
