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
      <p className="text-santa/60 font-sourcesans text-[20px] mt-[80px] leading-9 max-w-[730px]">
        Design with 7+ years of experience in UX and Product design as well as
        Wire-framing, Visual Design, Interaction Design, and Prototyping. My
        approach focuses on creating simple yet emotionally engaging products
        that solve problems and create meaningful experiences for users. I
        prioritise the interaction design of affordance to create effective
        interfaces and utilise prototyping to explore new design possibilities.
        And strongly focused on achieving business goals through playful UI
        design, pixel-perfect develop- ment accuracy, and usability.
      </p>
    </section>
  );
};

export default Methodology;
