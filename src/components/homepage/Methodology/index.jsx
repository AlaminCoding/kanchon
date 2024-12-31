import SectionTitle from "../../common/SectionTitle";
import Design from "./SVGIcons/Design";
import Empathize from "./SVGIcons/Empathize";
import Ideation from "./SVGIcons/Ideation";
import Research from "./SVGIcons/Research";
import Test from "./SVGIcons/Test";

const Methodology = () => {
  return (
    <section className="mt-[80px]">
      <SectionTitle title={"Methodology - Process i follow"} />
      <div className="flex mt-[40px] gap-[20px]">
        <Empathize />
        <Ideation />
        <Research />
        <Design />
        <Test />
      </div>
      <p className="text-white/60 text-[16px] mt-[100px] font-inter font-light uppercase tracking-[2px] leading-8 max-w-[536px]">
        Demonstrating a selection of my works and expertise in business &
        user-focused solutions
      </p>
    </section>
  );
};

export default Methodology;
