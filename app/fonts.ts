import localFont from "next/font/local";

export const nunito = localFont({
  src: [
    {
      path: "../public/fonts/Nunito-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-nunito",
});

export const notoSans = localFont({
  src: [
    {
      path: "../public/fonts/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-notoSans",
});
