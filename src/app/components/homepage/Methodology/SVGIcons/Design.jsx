import Title from "./Title";

const Design = () => {
  return (
    <div
      className="w-[110px] h-[110px] rounded-full group hover:w-[130px] transition-all duration-500 hover:shadow-design flex items-center justify-center relative"
      style={{
        backgroundImage: "linear-gradient(135deg, #9A6AFF 0%, #4F41F0 100%)",
      }}
    >
      <Title title="Design" />
      <svg
        width="85"
        height="74"
        viewBox="0 0 85 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-x-[7px] translate-y-[3px]"
      >
        <path
          d="M39.2946 14.969C43.0258 8.5062 52.354 8.50619 56.0853 14.969L70.8563 40.553C74.5876 47.0158 69.9235 55.0942 62.4609 55.0942H32.919C25.4564 55.0942 20.7923 47.0158 24.5236 40.553L39.2946 14.969Z"
          fill="url(#paint0_linear_1_462)"
          className="group-hover:translate-x-[-23px] transition-all duration-500"
        />
        <g
          style={{ mixBlendMode: "color-burn" }}
          className="group-hover:translate-x-[23px] transition-all duration-500"
        >
          <ellipse
            cx="22.9443"
            cy="32.954"
            rx="22.6962"
            ry="22.6962"
            fill="#0094FF"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_462"
            x1="47.69"
            y1="10.1934"
            x2="47.6899"
            y2="54.7657"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD97FF" />
            <stop offset="1" stopColor="#F3D587" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Design;
