export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { name },
}: {
  params: { name: string };
}) {
  return {
    title: `${name.replaceAll("-", " ")} - MODESIGN`,
    description: name,
  };
}

export default function BlogSingleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
