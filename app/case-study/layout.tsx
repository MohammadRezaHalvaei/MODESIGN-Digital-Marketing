import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Promote - MODESIGN",
  description: "Case Study Promote",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
