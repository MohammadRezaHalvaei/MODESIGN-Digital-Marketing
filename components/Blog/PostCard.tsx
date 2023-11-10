import Image from "next/image";
import { Link } from "nextjs13-progress";

type PostsCardProps = {
  group: string;
  title: string;
  src: string;
};

export default function PostsCard({ src, group, title }: PostsCardProps) {
  return (
    <div
      className="py-11 pb-14 px-9 border-[1.5px] border-[#DCDCDC] rounded-[30px] 
      group relative h-full max-sm:px-4 max-sm:py-8"
    >
      <Link href={`/blog/${title.split(" ").slice(0, 6).join("-")}`}>
        <Image
          src={src}
          width={500}
          height={400}
          alt={title}
          className="mb-[30px] w-full"
        />
      </Link>
      <div className="flex justify-between items-center mb-[22px]">
        <Link
          href={`/blog/${title.split(" ").slice(0, 6).join("-")}`}
          className="py-2 px-5 rounded-full border border-secondary_a dur-200 hover:bg-primary_a max-[550px]:text-sm"
        >
          {group}
        </Link>
        <p className="font-notoSans text-[15px] font-medium leading-[23.48px] tracking-widest">
          September 1, 2022
        </p>
      </div>
      <Link
        href={`/blog/${title.split(" ").slice(0, 6).join("-")}`}
        className="h6-title dur-200 hover:text-primary_b max-[550px]:text-xl"
      >
        {title}
      </Link>
      <div
        className="dur-400 bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA]
        absolute top-0 right-0 left-0 bottom-0 rounded-[30px] opacity-0 group-hover:opacity-100 -z-10"
      />
    </div>
  );
}
