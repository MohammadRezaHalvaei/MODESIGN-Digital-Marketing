import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/utils/supabase";

export async function fetchCases() {
  // await new Promise((revoke) => setTimeout(revoke, 3000));
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: cases } = await supabase.from("case").select();

  return cases;
}

export async function fetchCaseTitle(param: string) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: title, error } = await supabase
    .from("case")
    .select()
    .like("title", `%${param.replaceAll("-", " ")}%`);

  if (error) throw error;

  return title?.at(0);
}
