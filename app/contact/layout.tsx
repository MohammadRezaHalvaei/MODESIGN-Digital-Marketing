import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us Promote - MODESIGN",
  description: "Contact Us Promote",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
