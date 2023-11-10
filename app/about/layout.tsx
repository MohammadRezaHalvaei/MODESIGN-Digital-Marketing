import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Promote - MODESIGN",
  description: "About Promote",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
