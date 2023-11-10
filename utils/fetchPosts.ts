import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabase";

export async function fetchPosts() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: blog } = await supabase.from("blog").select();
  return blog;
}

export async function fetchPostTitle(param: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: blog, error } = await supabase
    .from("blog")
    .select()
    .like("title", `%${param.replaceAll("-", " ")}%`);

  if (error) throw error;

  return blog?.at(0);
}
