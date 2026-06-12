/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        monsoon: "#828290",
        onyx: "#121212",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sourcesans: "var(--font-sourcesans)",
        rebond: "var(--font-rebond)",
        jakarta: "var(--font-jakarta-sans)",
        meow: "var(--font-meow)",
        jetbrains: "var(--font-jetbrains)",
        interTight: "var(--font-inter-tight)",
        instrument: "var(--font-instrument-serif)",
      },
      boxShadow: {
        empathize: "0px 10px 10px 0px #D800DA33",
        ideation: "0px 10px 20px 0px #DC1D3240",
        research: "0px 10px 30px 0px #20A5FF4D",
        design: "0px 10px 30px 0px #644CF566",
        test: "0px 10px 40px 0px #A239F24D",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scale-pulse": {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-screens": {
          from: { transform: "translate3d(0,0,0)" },
          // -50% minus half the 36px gap between the two sets, for a seamless loop
          to: { transform: "translate3d(calc(-50% - 18px),0,0)" },
        },
        /* sidebar brand swap — base image blurs out while the portrait
           wipes in from the top, then reverses */
        "ks-img-a": {
          "0%, 60%, 96%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "blur(0)",
            clipPath: "inset(0)",
          },
          "66%": { opacity: "1", transform: "scale(0.985)", filter: "blur(2px)" },
          "72%, 88%": { opacity: "0", transform: "scale(0.94)", filter: "blur(8px)" },
          "94%": { opacity: "1", transform: "scale(0.985)", filter: "blur(2px)" },
        },
        "ks-img-b": {
          "0%, 60%": {
            opacity: "0",
            transform: "scale(1.06)",
            filter: "grayscale(1) blur(8px)",
            clipPath: "inset(0 0 100% 0)",
          },
          "66%": {
            opacity: "0.6",
            transform: "scale(1.03)",
            filter: "grayscale(1) blur(4px)",
            clipPath: "inset(0 0 50% 0)",
          },
          "72%, 88%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "grayscale(1) blur(0)",
            clipPath: "inset(0)",
          },
          "94%": {
            opacity: "0.6",
            transform: "scale(1.03)",
            filter: "grayscale(1) blur(4px)",
            clipPath: "inset(50% 0 0 0)",
          },
          "96%, 100%": {
            opacity: "0",
            transform: "scale(1.06)",
            filter: "grayscale(1) blur(8px)",
            clipPath: "inset(100% 0 0 0)",
          },
        },
        /* diagonal gloss flash at each swap moment */
        "ks-sweep": {
          "0%, 60%": { opacity: "0", transform: "translateX(-130%)" },
          "64%": { opacity: "1", transform: "translateX(-40%)" },
          "72%": { opacity: "0", transform: "translateX(130%)" },
          "88%": { opacity: "0", transform: "translateX(-130%)" },
          "92%": { opacity: "1", transform: "translateX(40%)" },
          "96%, 100%": { opacity: "0", transform: "translateX(130%)" },
        },
      },
      animation: {
        "scale-pulse": "scale-pulse 1.5s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
        "marquee-screens": "marquee-screens 50s linear infinite",
        "ks-img-a": "ks-img-a 8s cubic-bezier(0.7,0,0.3,1) infinite",
        "ks-img-b": "ks-img-b 8s cubic-bezier(0.7,0,0.3,1) infinite",
        "ks-sweep": "ks-sweep 8s cubic-bezier(0.7,0,0.3,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
