import Reveal from "@/components/common/Reveal";
import SectionLeftTitle from "../common/SectionLeftTitle";

const CaseHero = ({ data }) => {
  return (
    <section className="max-md:pt-[100px] max-md:pb-[60px] md:min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="case-container w-full">
        <Reveal>
          <SectionLeftTitle title={data.eyebrow} className={"mb-7"} />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-[clamp(50px,10vw,120px)] font-extrabold leading-[0.9] tracking-[-0.03em] uppercase text-white mb-10">
            {data.title}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-start gap-5 md:gap-16 mb-10 md:mb-[70px]">
            {data.meta.map((m) => (
              <div key={m.label}>
                <p className="font-jetbrains text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-2">
                  {m.label}
                </p>
                <p className="text-[14px] font-medium text-white/75">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 items-baseline border-t border-white/10 pt-10">
            <p className="font-jetbrains text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30">
              {data.overviewLabel}
            </p>
            <p className="text-[16px] italic text-white/60 leading-[1.6] max-w-[580px]">
              {data.overview}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseHero;
