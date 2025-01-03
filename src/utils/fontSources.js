import localFont from "next/font/local";

export const RebondFont = localFont({
  src: [
    {
      path: "../assets/fonts/rebond-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond-thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-rebond",
});

export const SourceSansFont = localFont({
  src: [
    {
      path: "../assets/fonts/sourcesans-pro-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/sourcesans-pro-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/sourcesans-pro-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sourcesans",
});
