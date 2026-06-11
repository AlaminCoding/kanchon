import React from "react";
import { cn } from "@/lib/utils";
import menuList from "@/utils/menuList";

const NavigationMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={cn(
        isMenuOpen ? "translate-x-0" : "translate-x-full",
        "fixed top-[50px] left-0 w-full h-[calc(100dvh-50px)] bg-black/50 backdrop-blur-[10px] z-20 transition-all duration-500",
      )}
    >
      <ul className="h-full w-full flex flex-col justify-center">
        {menuList.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "w-full transition-all duration-1000",
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0",
            )}
            style={{
              transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : "0ms",
            }}
          >
            <a
              href={item.href}
              className={cn(
                "text-white text-center block w-full py-3 text-[30px] font-jetbrains uppercase tracking-tighter border-white/10 border-y-[0.2px]",
                index === 0 ? "border-t-[0px]" : "",
                index === menuList.length - 1 ? "border-b-[0px]" : "",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
