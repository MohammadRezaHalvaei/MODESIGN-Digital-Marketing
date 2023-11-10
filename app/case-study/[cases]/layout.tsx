import { fetchCaseTitle } from "@/utils/fetchCases";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { cases },
}: {
  params: { cases: string };
}) {
  const data = await fetchCaseTitle(cases);

  return {
    title: `MODESIGN - ${data?.title}`,
    description: data?.title,
  };
}

export default function BlogSingleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
