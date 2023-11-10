import Image from "next/image";
import Tag from "../Utils/Tag";
import ArticlesContent from "../Home/Articles/ArticlesContent";

import icon from "@/public/images/blog/Icon.png";
import increase from "@/public/images/home/articles/increase.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import { Link } from "nextjs13-progress";

export default function Articles() {
  return (
    <section className="max-w-[1200px] mx-auto py-[150px] px-6 max-sm:py-20 max-sm:px-4">
      <div
        className="grid grid-cols-2 justify-between items-center mb-16 
        max-[1100px]:grid-cols-1 max-[1100px]:gap-12 max-[1100px]:justify-items-center"
      >
        <HorizontalAnimation xAxis={-100} delay={0.4} className="flex">
          <Image
            src={icon}
            alt="About"
            className="mr-10 min-w-[88px] h-[88px] max-sm:mr-4"
          />
          <div>
            <Tag
              title="01. articles"
              className="mb-4"
              slashColor="text-primary_b"
            />
            <h3 className="h3-title max-w-[620px] max-sm:text-2xl">
              Browse our content on growth marketing
            </h3>
          </div>
        </HorizontalAnimation>
        <HorizontalAnimation
          delay={0.4}
          className="flex gap-5 ml-auto items-center max-[1100px]:mx-auto max-sm:gap-3"
        >
          <input
            type="text"
            placeholder="Search the blog..."
            className="py-4 pl-6 w-[350px]  placeholder:text-[#858585] placeholder:menu menu focus:outline-0 border-[1.5px] border-secondary_a
             rounded-[10px] hover:text-secondary_a hover:placeholder:text-[#858585]
             max-sm:w-[220px] max-sm:py-2"
          />
          <button className="btn-black py-4 px-8 h-fit max-sm:px-3 max-sm:py-2">
            Search
          </button>
        </HorizontalAnimation>
      </div>
      <VerticalAnimation
        delay={0.4}
        className="grid grid-cols-2 gap-24 bg-[#FFF3CA] py-[86px] px-[90px] mb-5 rounded-[10px] 
        max-lg:grid-cols-1 max-lg:px-12 max-lg:mb-12 max-sm:px-8 max-lg:gap-12 max-lg:py-8"
      >
        <ArticlesContent title="The Best 4 Types of Marketing Strategies for Small Businesses" />
        <Link href="/blog/The-Best-4-Types-of-Marketing">
          <Image
            src={increase}
            alt="Increase Twitter Reach"
            className="h-full w-full"
          />
        </Link>
      </VerticalAnimation>
    </section>
  );
}
