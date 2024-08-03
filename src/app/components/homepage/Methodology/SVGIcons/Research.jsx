import Title from "./Title";

const Research = () => {
  return (
    <div
      className="w-[110px] h-[110px] rounded-full group hover:w-[130px] transition-all duration-500 hover:shadow-research flex items-center justify-center relative"
      style={{
        backgroundImage: "linear-gradient(135deg, #25C4FC 0%, #1C71EE 100%)",
      }}
    >
      <Title title="Research" />
      <svg
        width="76"
        height="45"
        viewBox="0 0 76 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.794434"
          width="75"
          height="44"
          rx="22"
          fill="#FFD934"
        />
        <g
          filter="url(#filter0_d_1_441)"
          className="group-hover:translate-x-[30px] transition-all duration-500"
        >
          <path
            d="M21.4397 33.8105C28.0759 33.8105 33.4556 28.4309 33.4556 21.7947C33.4556 15.1585 28.0759 9.77881 21.4397 9.77881C14.8035 9.77881 9.42383 15.1585 9.42383 21.7947C9.42383 28.4309 14.8035 33.8105 21.4397 33.8105Z"
            fill="white"
          />
          <path
            d="M33.7706 36.2189C33.4889 36.221 33.2097 36.1665 32.9495 36.0585C32.6893 35.9505 32.4535 35.7912 32.2561 35.5902L25.5838 28.9322C25.1859 28.5286 24.9629 27.9845 24.9629 27.4177C24.9629 26.8509 25.1859 26.3069 25.5838 25.9033C25.7818 25.7028 26.0177 25.5437 26.2776 25.4351C26.5376 25.3264 26.8166 25.2705 27.0983 25.2705C27.3801 25.2705 27.659 25.3264 27.919 25.4351C28.179 25.5437 28.4148 25.7028 28.6128 25.9033L35.2851 32.5613C35.4855 32.7593 35.6447 32.9951 35.7533 33.2551C35.8619 33.5151 35.9178 33.794 35.9178 34.0758C35.9178 34.3575 35.8619 34.6365 35.7533 34.8964C35.6447 35.1564 35.4855 35.3922 35.2851 35.5902C35.0877 35.7912 34.8519 35.9505 34.5917 36.0585C34.3316 36.1665 34.0523 36.221 33.7706 36.2189Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_441"
            x="4.49982"
            y="6.0858"
            width="36.342"
            height="36.288"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.231" />
            <feGaussianBlur stdDeviation="2.46201" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.753158 0 0 0 0 0.609858 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_441"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_441"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Research;
