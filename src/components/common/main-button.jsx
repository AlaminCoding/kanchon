import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const MainButton = ({
  title,
  link,
  variant = "white",
  download = false,
  className,
}) => {
  return (
    <Link
      {...(link && { href: link })}
      {...(download && { download: true })}
      {...(download && { target: "_blank" })}
      {...(download && { rel: "noopener noreferrer" })}
      className={cn(
        "relative px-5 py-3 text-[13px] font-interTight font-medium tracking-[-0.005em] rounded-full border border-white overflow-hidden z-0 group transition-all duration-300 ease-in-out hover:-translate-y-1 text-white flex justify-center",
        className,
      )}
    >
      <span
        className={cn(
          "absolute left-0 bg-white w-full h-full transition-all duration-300 ease-in-out z-[-1] group-hover:bottom-full",
          variant === "white"
            ? "bottom-0 group-hover:bottom-full"
            : "top-full group-hover:top-0",
        )}
      />
      <span className="mix-blend-difference">{title}</span>
    </Link>
  );
};

export default MainButton;
