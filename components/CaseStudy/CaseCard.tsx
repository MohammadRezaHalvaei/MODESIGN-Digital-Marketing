import Image from "next/image";
import ArrowButton from "../Utils/ArrowButton";

import arrow from "@/public/images/home/articles/arrow white.svg";
import { Link } from "nextjs13-progress";

type CaseCardProps = {
  bgColor: string;
  postImage: string;
  logo: string;
  title: string;
  desc: string;
};

export default function CaseCard({
  bgColor,
  postImage,
  logo,
  title,
  desc,
}: CaseCardProps) {
  return (
    <div
      className="grid grid-cols-2 gap-[50px] p-[50px] rounded-[10px] items-center max-[1201px]:grid-cols-1 max-sm:p-6 max-sm:gap-7"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <Link href={`/case-study/${title.split(" ").slice(0, 6).join("-")}`}>
        <Image
          src={postImage}
          alt={title}
          width={520}
          height={460}
          className="w-full h-full"
        />
      </Link>
      <div className="bg-white rounded-[10px] py-[49px] px-9 h-full max-sm:py-10 max-sm:px-6">
        <div className="pb-5 border-b border-[#ECECEC] mb-5">
          <Image src={logo} alt={title} width={140} height={40} />
        </div>
        <Link
          href={`/case-study/${title.split(" ").slice(0, 6).join("-")}`}
          className="h6-title mb-2.5 dur-200 hover:text-primary_b inline-block max-sm:text-xl"
        >
          {title}
        </Link>
        <p className="parag mb-10 max-sm:text-base max-sm:mb-6">{desc}</p>
        <ArrowButton
          title="Read Case Study"
          link={`case-study/${title.split(" ").slice(0, 6).join("-")}`}
          className="bg-secondary_a text-white border-transparent hover:bg-primary_b hover:text-white"
          arrowImage={arrow}
        />
      </div>
    </div>
  );
}
