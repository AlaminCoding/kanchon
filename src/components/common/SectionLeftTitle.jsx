import React from "react";
import { cn } from "@/lib/utils";

const SectionLeftTitle = ({ title, className }) => {
  return (
    <p
      className={cn(
        "font-jetbrains text-[11px] text-white uppercase sm:w-[100px] xl:w-[180px] shrink-0 tracking-widest",
        className,
      )}
    >
      {title}
    </p>
  );
};

export default SectionLeftTitle;
