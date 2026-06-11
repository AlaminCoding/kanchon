import ProjectHeader from "./project-header";
import { WorkList } from "./project.data";
import WorkCard from "./WorkCard";

const Projects = () => {
  return (
    <section className="pt-[50px] sm:pt-[120px]" id="case-studies">
      <ProjectHeader />
      <div className="sm:mt-[80px]">
        {WorkList.map((item) => {
          return <WorkCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
