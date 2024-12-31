import Title from "./Title";

const Ideation = () => {
  return (
    <div
      className="w-[110px] h-[110px] rounded-full group hover:w-[130px] transition-all duration-500 hover:shadow-ideation flex items-center justify-center relative"
      style={{
        backgroundImage: "linear-gradient(135deg, #FA566E 0%, #FA2A40 100%)",
      }}
    >
      <Title title="Ideation" />
      <svg
        width="49"
        height="66"
        viewBox="0 0 49 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]"
      >
        <path
          d="M24.9366 65.6023C19.8037 65.6023 15.6426 61.4412 15.6426 56.3083V53.9136H34.2306V56.3083C34.2306 61.4412 30.0695 65.6023 24.9366 65.6023Z"
          fill="#840010"
          fillOpacity="0.6"
        />
        <path
          d="M48.9361 24.353C48.9361 11.0949 38.1758 0.350003 24.9119 0.375044C11.6808 0.400085 0.903619 11.2646 0.980635 24.4955C1.02504 32.1232 4.63111 38.9069 10.2198 43.2678C11.6776 44.4054 12.5315 46.1497 12.5315 47.999C12.5315 51.9845 15.7624 55.2152 19.7477 55.2152H30.1685C34.1539 55.2152 37.3847 51.9845 37.3847 47.999V47.9986C37.3847 46.151 38.2362 44.4067 39.693 43.2706C45.3187 38.8825 48.9361 32.0402 48.9361 24.353Z"
          fill="url(#paint0_linear_1_416)"
        />
        <path
          d="M4.98877 37.5732C6.42631 39.7432 8.20598 41.6667 10.2531 43.2641C11.7109 44.4018 12.5647 46.1461 12.5647 47.9953C12.5647 51.9808 15.7956 55.2116 19.781 55.2116H30.2017C34.1872 55.2116 37.418 51.9807 37.418 47.9953V47.9949C37.418 46.1474 38.2695 44.4031 39.7263 43.2669C41.7748 41.6691 43.5554 39.7444 44.9937 37.5734H4.98877V37.5732Z"
          fill="url(#paint1_linear_1_416)"
        />
        <path
          d="M24.9234 46.6912C37.0809 46.6912 46.9365 36.8356 46.9365 24.6781C46.9365 12.5206 37.0809 2.66504 24.9234 2.66504C12.7659 2.66504 2.91028 12.5206 2.91028 24.6781C2.91028 36.8356 12.7659 46.6912 24.9234 46.6912Z"
          fill="url(#paint2_linear_1_416)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_416"
            x1="14.5362"
            y1="16.5069"
            x2="37.7297"
            y2="39.7005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FEE8AA" />
            <stop offset="1" stopColor="#FFCB3D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_416"
            x1="24.9913"
            y1="41.5041"
            x2="24.9913"
            y2="52.86"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7C32" stopOpacity="0" />
            <stop offset="1" stopColor="#FF9519" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_416"
            x1="27.1957"
            y1="29.2557"
            x2="16.1841"
            y2="7.07316"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEBB4" stopOpacity="0" />
            <stop offset="1" stopColor="#FFF5D9" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="150"
        height="145"
        viewBox="0 0 150 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[50%] left-[50%] w-full h-full rounded-full translate-x-[-50%] translate-y-[-50%] z-[0] opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <g filter="url(#filter0_f_1_428)">
          <path
            d="M74.4264 104.764C97.0283 104.764 115.351 90.4468 115.351 72.7861C115.351 55.1254 97.0283 40.8086 74.4264 40.8086C51.8244 40.8086 33.502 55.1254 33.502 72.7861C33.502 90.4468 51.8244 104.764 74.4264 104.764Z"
            fill="#FFE179"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_428"
            x="-6.49805"
            y="0.808594"
            width="161.849"
            height="143.955"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="20"
              result="effect1_foregroundBlur_1_428"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Ideation;
