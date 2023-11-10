import LandingName from "@/components/Utils/LandingName";
import Image from "next/image";

import nattasha from "@/public/images/blog/post/natasha.png";
import insta from "@/public/images/blog/post/Insta.png";
import facebook from "@/public/images/blog/post/Fb.png";
import twitter from "@/public/images/blog/post/Twiter.png";
import PostContent from "@/components/Blog/Posts/PostContent";
import { fetchPosts } from "@/utils/fetchPosts";
import { Link } from "nextjs13-progress";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export async function generateStaticParams() {
  return [
    { post: "The-Best-4-Types-of-Marketing" },
    { post: "Learn-How-To-Increase-Traffic-To" },
    { post: "Five-Ways-for-Agencies-to-Get" },
    { post: "How-To-Use-Your-Content-Marketing" },
  ];
}

export default async function page({
  params: { post },
}: {
  params: { post: string };
}) {
  const data = await fetchPosts();

  const searchParam = post.replaceAll("-", " ");

  const result = data?.find((item) => item.title.includes(searchParam));

  return (
    <main className="relative">
      <LandingName
        bgLtoR={["#F5E9FF", "#FFDBD4"]}
        blursLtoR={["#DDFF7C", "#FFC4BB", "#FA95D1"]}
        title=""
      />
      <VerticalAnimation
        delay={0.4}
        className="max-w-[1200px] mx-auto -mt-96 relative z-50 px-6 max-sm:-mt-[450px]"
      >
        <div className="flex gap-14 items-center mb-[22px]">
          <p className="py-2 px-5 rounded-full border border-secondary_a dur-200">
            {result?.group}
          </p>
          <p className="font-notoSans text-[15px] font-medium leading-[23.48px] tracking-widest">
            September 1, 2022
          </p>
        </div>
        <h2 className="h2-title mb-10 max-w-[850px] max-md:text-3xl max-sm:mb-6 max-sm:text-2xl">
          {result?.title}
        </h2>
        <Image
          src={result!.bigImage}
          alt={result!.title}
          width={1200}
          height={560}
          className="rounded-[30px] mb-10 max-sm:mb-6"
        />
        <div className="flex items-center justify-between pb-10 border-b border-[#CCCCCC] max-sm:flex-col max-sm:gap-8">
          <div className="flex gap-5 items-center">
            <Image src={nattasha} alt="Nattasha " />
            <div>
              <h6 className="h6-title mb-1">Nattasha </h6>
              <p className="font-notoSans text-xl leading-8">Designer</p>
            </div>
          </div>
          <div className="flex gap-8">
            <Link target="_blank" href="https://instagram.com">
              <Image src={insta} alt="Instagram" />
            </Link>
            <Link target="_blank" href="https://Facebook.com">
              <Image src={facebook} alt="Facebook" />
            </Link>
            <Link target="_blank" href="https://Twitter.com">
              <Image src={twitter} alt="Twitter" className="pt-0.5" />
            </Link>
          </div>
        </div>
      </VerticalAnimation>
      <VerticalAnimation delay={0.4}>
        <PostContent />
      </VerticalAnimation>
    </main>
  );
}
