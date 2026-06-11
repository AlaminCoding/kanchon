"use client";
import DhakaTime from "@/components/SidebarInfo/dhaka-time";
import Image from "next/image";
import React from "react";
import MenuBar from "./menubar";
import NavigationMenu from "./navigation-menu";
import { useState } from "react";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-[50px] w-full min-[992px]:hidden block fixed top-0 left-0 z-20 bg-black/50 backdrop-blur-[10px] border-b-[0.5px] border-white/20">
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
          <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <NavigationMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default MobileNavbar;
