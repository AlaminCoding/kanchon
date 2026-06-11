import React from "react";
import menuList from "@/utils/menuList";

const Menu = () => {
  return (
    <ul className="text-white/70 text-xs font-thin font-jetbrains uppercase">
      {menuList.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className="flex gap-2 py-2.5 items-center group hover:text-white hover:translate-x-1.5 transition-all duration-300"
          >
            <span className="size-1.5 bg-white/40 block group-hover:bg-white transition-all duration-300" />
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
