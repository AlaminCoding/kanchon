"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DynamicImage = () => {
  const [image, setImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => prev + 1);
      if (image === 2) {
        setImage(1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [image]);
  return (
    <div className="relative w-[158px] h-[172.81px]">
      <Image
        src="/brand-portrait.png"
        height={172.81}
        width={158}
        alt="main profile image"
        className={cn(
          image === 1 ? "opacity-100" : "opacity-0",
          "transition-all duration-300 absolute top-0 left-0",
        )}
      />
      <Image
        src="/brand-component.png"
        height={172.81}
        width={158}
        alt="main profile image"
        className={cn(
          image === 2 ? "opacity-100" : "opacity-0",
          "transition-all duration-300 absolute top-0 left-0",
        )}
      />
    </div>
  );
};

export default DynamicImage;
