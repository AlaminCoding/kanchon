import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import ArchiveCard from "./ArchiveCard";
import { ArchiveList } from "./otherProjects.data";

const OtherProjects = () => {
  return (
    <section className="py-[50px] sm:py-[120px]" id="other-projects">
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 items-start">
        <SectionLeftTitle title="Other Projects" />
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-0 sm:border border-white/10">
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
