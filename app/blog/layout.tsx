import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Promote - MODESIGN",
  description: "Blog Promote",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
