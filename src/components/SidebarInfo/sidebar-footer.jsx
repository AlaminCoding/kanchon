import React from "react";
import Globe from "@/components/icons/globe";
import Facebook from "@/components/icons/facebook";
import Behance from "@/components/icons/Behance";
import Linkedin from "@/components/icons/Linkedin";
import DhakaTime from "./dhaka-time";

const SidebarFooter = () => {
  return (
    <div className="space-y-5">
      <DhakaTime />

      <div className="flex text-[18px] justify-between items-center">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Globe />
        </a>
        <a href="#">
          <Behance />
        </a>
        <a href="#" className="text-dove">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default SidebarFooter;
