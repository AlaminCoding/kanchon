/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mirage: "#1B1B1F",
        baltic: "#212126",
        dolphin: "#666773",
        dove: "#6B6B76",
        vampire: "#52525E",
        santa: "#A0A0B0",
        metal: "#26262C",
      },
      fontFamily: {
        sourcesans: "var(--font-sourcesans)",
        rebond: "var(--font-rebond)",
      },
      boxShadow: {
        empathize: "0px 10px 10px 0px #D800DA33",
        ideation: "0px 10px 20px 0px #DC1D3240",
        research: "0px 10px 30px 0px #20A5FF4D",
        design: "0px 10px 30px 0px #644CF566",
        test: "0px 10px 40px 0px #A239F24D",
      },
    },
  },
  plugins: [],
};
