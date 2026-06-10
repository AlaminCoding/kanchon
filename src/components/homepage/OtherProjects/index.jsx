import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import ArchiveCard from "./ArchiveCard";
import { ArchiveList } from "./otherProjects.data";

const OtherProjects = () => {
  return (
    <section className="py-[120px]" id="other-projects">
      <div className="flex items-start">
        <SectionLeftTitle title="Other Projects" />
        <div className="flex-1 grid grid-cols-3 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1 border border-white/10">
          {ArchiveList.map((project, index) => (
            <ArchiveCard
              key={project.title}
              project={project}
              index={index}
              total={ArchiveList.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
