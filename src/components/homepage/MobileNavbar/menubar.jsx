import React from "react";
import { cn } from "@/lib/utils";

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="w-5 h-4 flex flex-col justify-between cursor-pointer"
    >
      <div
        className={cn(
          "h-[1.5px] w-full bg-white transition-all duration-300 origin-center",
          isMenuOpen ? "rotate-45 translate-y-[7.3px]" : "",
        )}
      />
      <div
        className={cn(
          "h-[1.5px] w-full bg-white transition-all duration-300",
          isMenuOpen ? "opacity-0 -translate-x-5" : "",
        )}
      />
      <div
        className={cn(
          "h-[1.5px] w-full bg-white transition-all duration-300 origin-center",
          isMenuOpen ? "-rotate-45 -translate-y-[7.3px]" : "",
        )}
      />
    </div>
  );
};

export default MenuBar;
