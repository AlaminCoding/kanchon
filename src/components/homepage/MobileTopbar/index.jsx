import DhakaTime from "@/components/SidebarInfo/dhaka-time";
import Image from "next/image";
import React from "react";

const MobileTopbar = () => {
  return (
    <div className="h-[50px] w-full min-[992px]:hidden block fixed top-0 left-0 z-20 bg-black/50 backdrop-blur-[10px]">
      <div className="home-container h-full flex items-center justify-between">
        <div className="flex gap-3">
          <Image
            src="/brand-portrait.png"
            height={172.81}
            width={158}
            alt="main brand image"
            className="h-[30px] w-auto"
          />
          <Image
            src="/brand-component.png"
            height={172.81}
            width={158}
            alt="main profile image"
            className="h-[30px] w-auto"
          />
        </div>

        <DhakaTime />
      </div>
    </div>
  );
};

export default MobileTopbar;
