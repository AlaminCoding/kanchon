import SectionLeftTitle from "@/components/common/SectionLeftTitle";
import SectionText from "@/components/common/SectionText";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex items-start">
      <SectionLeftTitle title="Selected Work" className={"mt-2"} />
      <div className="space-y-5">
        <SectionTitle
          title="Four engagements. Measurable outcomes."
          className="max-w-[500px]"
        />
        <SectionText
          text="A deliberately small portfolio. Each project below was chosen because it moved a number that mattered to the business — and because the craft held up to post-launch scrutiny."
          className="max-w-[550px]"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
