import Title from "./Title";

const Empathize = () => {
  return (
    <div className="w-[110px] h-[110px] bg-white rounded-full group hover:w-[130px] transition-all duration-500 hover:shadow-empathize relative">
      <Title title="Empathize" />
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66.0281 31.1963C56.4936 31.1963 48.7644 38.9255 48.7644 48.46V49.549L43.5322 63.9443C43.3864 64.3491 43.4457 64.7995 43.6915 65.1527C43.9392 65.5098 44.3459 65.7231 44.7805 65.7238H51.4204V76.2549C51.4204 76.9883 52.015 77.5829 52.7483 77.5829H66.0281V83.9482C66.0281 84.6816 66.6227 85.2762 67.3561 85.2762H81.9639C82.6973 85.2762 83.2919 84.6816 83.2919 83.9482V48.46C83.2919 38.9255 75.5627 31.1963 66.0281 31.1963Z"
          fill="url(#paint1_linear_1_397)"
          className="transition-all group-hover:translate-x-[25px] duration-500"
        />
        <g style={{ mixBlendMode: "darken" }}>
          <path
            d="M68.7873 58.3149L63.4167 43.5388V42.4211C63.4167 32.6343 55.483 24.7007 45.6962 24.7007C35.9095 24.7007 27.9758 32.6343 27.9758 42.4211V80.33C27.9758 81.0828 28.5862 81.6932 29.3389 81.6932H44.3331C45.0859 81.6932 45.6962 81.0828 45.6962 80.33V69.6833H59.3273C60.0801 69.6833 60.6904 69.0729 60.6904 68.3202V60.1415H67.506C67.9521 60.1408 68.3695 59.9219 68.6237 59.5554C68.8761 59.1928 68.9369 58.7305 68.7873 58.3149Z"
            fill="url(#paint2_linear_1_397)"
            className="transition-all group-hover:translate-y-[-5px] duration-500"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_397"
            x1="0"
            y1="0"
            x2="110"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_397"
            x1="63.3727"
            y1="31.1963"
            x2="63.3727"
            y2="85.2762"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9FC2" />
            <stop offset="1" stopColor="#9C1EE9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_397"
            x1="48.4219"
            y1="24.7007"
            x2="48.4219"
            y2="81.6931"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E0FF" />
            <stop offset="1" stopColor="#1F86F2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Empathize;
