import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import AnimatedParagraph from "./animated-paragraph";
import AnimatedTitles from "./animated-titles";
import HeroLight from "./hero-light";

const Header = () => {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center py-[100px]">
      <HeroLight />
      <div className="relative z-10 home-container w-full flex">
        <SectionLeftTitle title="Meet Me" className="mt-4 lg:mt-7" />
        <div>
          <h2 className="font-interTight font-[300] text-white text-[55px] lg:text-[80px] leading-[1.2] tracking-[-4%]">
            architecting <br /> digital experiences by blending{" "}
            <AnimatedTitles
              titles={["aesthetics", "usability", "functionality"]}
              className="text-white font-instrument italic"
            />
          </h2>
          <AnimatedParagraph text="Senior UX strategist with 9+ years turning ambiguous problems into measurable outcomes — 20+ products shipped across banking, fintech and SaaS on four continents, a 2× conversion lift at DESCO, and four industry awards along the way. Currently UX Lead at NextVentures, shaping FundedNext — the world's leading prop-trading platform — so high-stakes teams can move faster, decide sharper, and grow without rebuilding." />
        </div>
      </div>
    </section>
  );
};

export default Header;
