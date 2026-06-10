import SectionTitle from "@/components/common/SectionTitle";
import ArrowLink from "../../common/ArrowLink";
import Reveal from "../../common/Reveal";
import SectionText from "@/components/common/SectionText";

const WorkCard = ({ item }) => {
  return (
    <Reveal>
      <article className="relative grid grid-cols-[100px_1fr_1fr] xl:grid-cols-[180px_1fr_1fr] py-[56px] border-b border-white/10 items-start overflow-hidden">
        {/* numeric rail */}
        <div className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase">
          <p className="text-[13px] text-white">{item.idx}</p>
          <p className="mt-2 max-[820px]:mt-0">{item.year}</p>
          <p className="mt-0.5 max-[820px]:mt-0 text-white/35">{item.period}</p>
        </div>

        {/* copy column — solid bg so the bleeding image never runs under text */}
        <div className="relative z-[3] bg-black pr-5">
          <div className="font-jetbrains text-[11px] text-white/60 tracking-[0.12em] uppercase mb-3.5">
            {item.client} <span className="text-white/35">·</span>{" "}
            {item.industry}
          </div>
          <h3 className="mb-[22px] font-interTight font-light text-[24px] lg:text-[38px] leading-[115%] max-w-[20ch] text-white">
            {item.title}
          </h3>
          <SectionText text={item.outcome} className="mb-8 max-w-[44ch]" />
          {item.caseUrl ? (
            <ArrowLink href={item.caseUrl}>Read case study</ArrowLink>
          ) : (
            <span className="font-jetbrains text-[11px] tracking-[0.12em] uppercase text-white/40 cursor-not-allowed">
              Case study — coming soon
            </span>
          )}
        </div>

        {/* media column — image bleeds past the card edges */}
        <div className="relative min-h-[340px] self-stretch">
          <img
            src={item.image}
            alt={item.client}
            className="absolute bottom-[-56px] left-[-24%] w-[135%] h-auto object-contain block pointer-events-none z-[1] max-[820px]:relative max-[820px]:bottom-auto max-[820px]:left-0 max-[820px]:w-full max-[820px]:max-w-[340px] max-[820px]:mt-[18px]"
          />
        </div>
      </article>
    </Reveal>
  );
};

export default WorkCard;
