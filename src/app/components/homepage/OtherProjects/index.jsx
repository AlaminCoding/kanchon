import SectionTitle from "../../common/SectionTitle";
import OtherProjectCard from "./OtherProjectCard";
import { OtherProjectsData } from "./otherProjects.data";

const OtherProjects = () => {
  return (
    <section className="mt-[80px]">
      <SectionTitle title={"MY OTHER PROJECTS I WORKED ON"} />
      <div className="grid grid-cols-3 gap-[10px] mt-[40px]">
        {OtherProjectsData.map((project) => {
          return <OtherProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default OtherProjects;
