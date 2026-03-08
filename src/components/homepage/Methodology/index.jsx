import SectionTitle from "../../common/SectionTitle";
import Design from "./SVGIcons/Design";
import Empathize from "./SVGIcons/Empathize";
import Ideation from "./SVGIcons/Ideation";
import Research from "./SVGIcons/Research";
import Test from "./SVGIcons/Test";

const Methodology = () => {
  return (
    <section className="mt-[120px]">
      <div className="flex items-center gap-[30px] mt-[40px]">
        <h2 className="font-meow text-transparent text-[32px] w-[144px] text-center rotate-[-12.41deg] bg-clip-text bg-gradient-to-r from-white/50 to-white/20">
          Methodology i follow -
        </h2>
        <div className="flex gap-[5px]">
          <Empathize />
          <Ideation />
          <Research />
          <Design />
          <Test />
        </div>
      </div>
      <p className="text-white/40 text-[16px] mt-[120px] font-jakarta font-light uppercase tracking-[2px] leading-8 max-w-[536px]">
        Demonstrating a selection of my works and expertise in business &
        user-focused solutions
      </p>
    </section>
  );
};

export default Methodology;
