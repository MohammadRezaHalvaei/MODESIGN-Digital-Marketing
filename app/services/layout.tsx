import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Promote - MODESIGN",
  description: "Services Promote",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
