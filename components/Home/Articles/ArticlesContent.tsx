import ArrowButton from "@/components/Utils/ArrowButton";
import { Link } from "nextjs13-progress";

type ArticlesContentType = {
  title: string;
};

export default function ArticlesContent({ title }: ArticlesContentType) {
  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex justify-between items-center">
        <p
          className="font-nunito font-medium text-lg leading-[28.8px] rounded-full 
          border border-secondary_a py-2 px-5"
        >
          Content
        </p>
        <p className="font-notoSans text-[15px] font-medium leading-[23.48px] tracking-widest">
          SEPTEMBER 1, 2022
        </p>
      </div>
      <div>
        <Link
          href={`/blog/${title.split(" ").slice(0, 6).join("-")}`}
          className="h6-title mb-2.5 block dur-200 hover:text-primary_b max-sm:text-xl"
        >
          {title}
        </Link>
        <p className="parag max-sm:text-base">
          Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
          ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
          auctor.
        </p>
      </div>
      <ArrowButton
        title="Read More"
        link={`blog/${title.split(" ").slice(0, 6).join("-")}`}
        className="mr-auto border-transparent max-sm:mx-auto"
      />
    </div>
  );
}
