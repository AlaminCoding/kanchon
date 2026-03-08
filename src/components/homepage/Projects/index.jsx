import SectionTitle from "../../common/SectionTitle";
import { ProjectList } from "./project.data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mt-[80px]">
      {ProjectList.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </section>
  );
};

export default Projects;
