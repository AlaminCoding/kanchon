import Image from "next/image";
import ProjectButton from "../../common/ProjectButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-onyx mt-[60px] px-[60px] py-[50px] relative rounded-[10px]">
      <div className="max-w-[400px]">
        <div className="space-y-5">
          <Image src={project.icon} alt="Project Logo" />
          <h2 className="text-[34px] text-white tracking-wide leading-[120%] font-rebond">
            <span className="font-bold">{project.title}</span>
            {" - "}
            <span className="font-thin">{project.subtitle}</span>
          </h2>
          <p className="text-white/60 text-[14px] leading-6 font-inter font-thin">
            {project.description}
          </p>
        </div>
        <Link href={project.case_study_link} className="inline-block mt-[34px]">
          <ProjectButton
            title={"Case Study"}
            bgColor={project.bgColor}
            textColor={project.textColor}
            icon={<FaArrowRightLong />}
          />
        </Link>
      </div>
      <div className="absolute w-[550px] top-[50%] translate-y-[-50%] right-[-20%]">
        <Image src={project.image} alt="Project Image" className="w-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
