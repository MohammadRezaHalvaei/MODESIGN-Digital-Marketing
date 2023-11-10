import type { Metadata } from "next";
import { nunito, notoSans } from "./fonts";
import "./globals.css";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer/Footer";
import { Next13NProgress } from "nextjs13-progress";

export const metadata: Metadata = {
  title: "Promote - MODESIGN",
  description: "Promote, Digital Marketing Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${notoSans.variable} overflow-x-hidden`}
      >
        <HeaderMenu />
        {children}
        <Footer />
        <Next13NProgress color="#5956E8" height={3} />
      </body>
    </html>
  );
}
