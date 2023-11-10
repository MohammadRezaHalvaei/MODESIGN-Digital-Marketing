import Image from "next/image";
import { fetchCases } from "@/utils/fetchCases";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default async function Landing({ cases }: { cases: string }) {
  const data = await fetchCases();

  const searchParam = cases.replaceAll("-", " ");

  const result = data?.find((item) => item.title.includes(searchParam));

  return (
    <section className="pt-[150px] max-w-[1200px] mx-auto px-6 max-sm:px-4 max-lg:pt-14">
      <VerticalAnimation delay={0.4}>
        <div className="flex gap-5 items-center justify-center mb-5">
          <Image
            src={result!.icon}
            alt={result!.title}
            width={120}
            height={41}
          />
          <div className="border-t-2 w-4 border-primary_b" />
          <p className="font-notoSans text-[15px] leading-[23.48px] tracking-widest">
            April 1, 2023
          </p>
        </div>
        <h2 className="h2-title mb-10 text-center px-9 font-bold max-md:text-3xl max-sm:text-2xl">
          {result?.title}
        </h2>
        <Image
          src={result!.postImage}
          alt={result!.title}
          className="rounded-[30px] mb-10"
          width={1200}
          height={560}
        />

        <div className="grid grid-cols-4 w-full pb-[50px] border-b border-[#CCCCCC] max-md:grid-cols-2 max-md:gap-8 max-sm:pb-7">
          <div className="text-center">
            <h6 className="h6-title mb-1 max-sm:text-xl">Client</h6>
            <p className="subtitle max-sm:text-lg">YouTube</p>
          </div>
          <div className="text-center">
            <h6 className="h6-title mb-1 max-sm:text-xl">Services</h6>
            <p className="subtitle max-sm:text-lg">Paid Advertising</p>
          </div>
          <div className="text-center">
            <h6 className="h6-title mb-1 max-sm:text-xl">Platforms</h6>
            <p className="subtitle max-sm:text-lg">YouTube Creators</p>
          </div>
          <div className="text-center">
            <h6 className="h6-title mb-1 max-sm:text-xl">Results</h6>
            <h3 className="h3-title text-primary_b max-sm:text-3xl">85m+</h3>
          </div>
        </div>
      </VerticalAnimation>
    </section>
  );
}
