import { fetchPostTitle } from "@/utils/fetchPosts";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { post },
}: {
  params: { post: string };
}) {
  const data = await fetchPostTitle(post);

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
