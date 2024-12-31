import Image from "next/image";
import ProjectButton from "../../common/ProjectButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-metal mt-[80px] px-[60px] py-[50px] relative">
      <div className="w-[60%]">
        <Image src={project.icon} alt="Project Logo" />
        <h2 className="text-[32px] text-white tracking-wide leading-[120%] mt-[25px]">
          <span className="font-rebond font-bold">{project.title}</span>
          {" - "}
          <span className="font-thin">{project.subtitle}</span>
        </h2>
        <p className="text-white/60 text-[16px] mt-[25px] font-inter font-light">
          {project.description}
        </p>
        <Link href={project.case_study_link}>
          <ProjectButton
            title={"Case Study"}
            bgColor={project.bgColor}
            textColor={project.textColor}
            icon={<FaArrowRightLong />}
            className="mt-[40px]"
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
