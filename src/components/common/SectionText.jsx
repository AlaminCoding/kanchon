import { cn } from "@/lib/utils";
import React from "react";

const SectionText = ({ text, className }) => {
  return (
    <p
      className={cn(
        "text-white/70 font-light text-sm lg:text-[17px] font-interTight leading-[140%]",
        className,
      )}
    >
      {text}
    </p>
  );
};

export default SectionText;
