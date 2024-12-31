"use client";

import { useState } from "react";
import Title from "./Title";

const Test = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[110px] h-[110px] rounded-full group hover:w-[130px] transition-all duration-500 hover:shadow-test flex items-center justify-center relative"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        backgroundImage:
          "linear-gradient(146.23deg, #AD39F5 13.99%, #8423E5 87.82%)",
      }}
    >
      <Title title="Test" />
      <svg
        width="52"
        height="54"
        viewBox="0 0 52 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.4853 12.1817V32.8613H0.291016V12.1817C0.291016 5.65551 5.36687 0.337891 11.5963 0.337891H40.18C46.4095 0.337891 51.4853 5.65551 51.4853 12.1817Z"
          fill="url(#paint0_linear_1_479)"
        />
        <path
          d="M0.291016 32.8613V33.3406C0.291016 39.1878 5.36687 43.9086 11.5963 43.9086H20.415C21.8249 43.9086 22.9785 44.987 22.9785 46.305V47.6709C22.9785 48.9889 21.8249 50.0673 20.415 50.0673H15.2366C14.1855 50.0673 13.3139 50.8821 13.3139 51.8646C13.3139 52.8471 14.1599 53.6619 15.2366 53.6619H37.155C38.2061 53.6619 39.0777 52.8471 39.0777 51.8646C39.0777 50.8821 38.2061 50.0673 37.155 50.0673H31.9766C30.5667 50.0673 29.4131 48.9889 29.4131 47.6709V46.305C29.4131 44.987 30.5667 43.9086 31.9766 43.9086H40.2057C46.4608 43.9086 51.511 39.1638 51.511 33.3406V32.8613H0.291016Z"
          fill="url(#paint1_linear_1_479)"
        />
        <path
          d="M7.5 12C7.5 9.79086 9.29086 8 11.5 8C12.6046 8 13.5 8.89543 13.5 10V25C13.5 26.1046 12.6046 27 11.5 27C9.29086 27 7.5 25.2091 7.5 23V12Z"
          fill="white"
          fillOpacity="0.5"
        />
        <rect
          className="transition-all duration-500"
          x="15.5"
          y="8"
          width={hover ? "18" : "6"}
          height="19"
          rx="2"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          className="transition-all duration-500"
          d={
            hover
              ? "M36 10C36 8.89543 36.8954 8 38 8H40C42.2091 8 44 9.79086 44 12V23C44 25.2091 42.2091 27 40 27H38C36.8954 27 36 26.1046 36 25V10Z"
              : "M23.5 10C23.5 8.89543 24.3954 8 25.5 8H39.5C41.7091 8 43.5 9.79086 43.5 12V23C43.5 25.2091 41.7091 27 39.5 27H25.5C24.3954 27 23.5 26.1046 23.5 25V10Z"
          }
          fill="white"
          fillOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_479"
            x1="6.6117"
            y1="0.216243"
            x2="27.3721"
            y2="40.5108"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#93C2EF" />
            <stop offset="0.481084" stopColor="#F2A1FF" />
            <stop offset="1" stopColor="#FFCC94" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_479"
            x1="25.901"
            y1="32.8613"
            x2="25.901"
            y2="53.6619"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A35CA" />
            <stop offset="0.435566" stopColor="#49199E" />
            <stop offset="0.623282" stopColor="#340A81" />
            <stop offset="1" stopColor="#3E1091" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Test;
