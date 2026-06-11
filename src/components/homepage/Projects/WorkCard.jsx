import SectionTitle from "@/components/common/SectionTitle";
import ArrowLink from "../../common/ArrowLink";
import Reveal from "../../common/Reveal";
import SectionText from "@/components/common/SectionText";
import Image from "next/image";

const WorkCard = ({ item }) => {
  return (
    <Reveal>
      <article className="relative grid sm:grid-cols-[100px_1fr_1fr] xl:grid-cols-[180px_1fr_1fr] py-[50px] sm:py-[56px] sm:gap-0 gap-5 border-b border-white/10 items-start overflow-hidden">
        {/* numeric rail */}
        <div className="font-jetbrains text-[11px] text-white/60 tracking-[0.14em] uppercase">
          <p className="text-[13px] text-white">{item.idx}</p>
          <p className="mt-2 max-[820px]:mt-0">{item.year}</p>
          <p className="mt-0.5 max-[820px]:mt-0 text-white/35">{item.period}</p>
        </div>

        {/* copy column — solid bg so the bleeding image never runs under text */}
        <div className="relative z-[3] bg-black pr-5">
          <div className="font-jetbrains text-[11px] text-white/60 tracking-[0.12em] uppercase mb-5 sm:mb-3.5">
            {item.client} <span className="text-white/35">·</span>{" "}
            {item.industry}
          </div>
          <h3 className="mb-5 sm:mb-[22px] font-interTight font-light text-[20px] sm:text-[24px] lg:text-[38px] leading-[115%] sm:max-w-[20ch] text-white">
            {item.title}
          </h3>
          <SectionText
            text={item.outcome}
            className="mb-5 sm:mb-8 max-w-[44ch]"
          />
          {item.caseUrl ? (
            <ArrowLink href={item.caseUrl}>Read case study</ArrowLink>
          ) : (
            <span className="font-jetbrains text-[11px] tracking-[0.12em] uppercase text-white/40 cursor-not-allowed">
              Case study — coming soon
            </span>
          )}
        </div>
        <div className="flex items-end h-full translate-y-[50px] sm:translate-y-[56px]">
          <Image
            src={item.image}
            alt={item.client}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </article>
    </Reveal>
  );
};

export default WorkCard;
