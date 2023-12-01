import Image from "next/image";
import Tag from "../../Utils/Tag";
import ArrowButton from "@/components/Utils/ArrowButton";
import ArticlesContent from "./ArticlesContent";

import icon from "@/public/images/home/articles/Icon.png";
import increase from "@/public/images/home/articles/increase.png";
import seo from "@/public/images/home/articles/seo.png";
import arrow from "@/public/images/home/articles/arrow-white.svg";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import { Link } from "nextjs13-progress";

export default function Articles() {
  return (
    <section className="max-w-[1200px] pt-[120px] pb-[150px] mx-auto px-8 max-lg:px-4 max-lg:py-[80px]">
      <VerticalAnimation
        delay={0.4}
        className="flex flex-col items-center text-center mb-12 max-w-[560px] mx-auto"
      >
        <Image src={icon} alt="Articles" className="mb-[34px]" />
        <Tag
          title="08. articles"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-2xl">
          Browse our content on growth marketing
        </h3>
      </VerticalAnimation>
      <VerticalAnimation
        delay={0.4}
        className="grid grid-cols-2 gap-24 bg-[#FFF3CA] py-[86px] px-[90px] mb-5 rounded-[10px] 
        max-lg:grid-cols-1 max-lg:px-12 max-lg:mb-12 max-sm:px-8 max-md:gap-12"
      >
        <ArticlesContent title="The Best 4 Types of Marketing Strategies for Small Businesses" />
        <Link
          href="/blog/The-Best-4-Types-of-Marketing"
          className="max-lg:row-start-1"
        >
          <Image
            src={increase}
            alt="Increase Twitter Reach"
            className="max-lg:w-full"
          />
        </Link>
      </VerticalAnimation>
      <VerticalAnimation
        delay={0.4}
        className="grid grid-cols-2 gap-24 bg-[#E9F7FF] py-[86px] px-[90px] rounded-[10px] mb-14 
        max-lg:grid-cols-1 max-lg:px-12 max-sm:px-8 max-md:gap-12"
      >
        <Link href="/blog/Learn-How-To-Increase-Traffic-To">
          <Image
            src={seo}
            alt="Increase SEO Authority"
            className="max-lg:w-full"
          />
        </Link>
        <ArticlesContent title="Learn How To Increase Traffic To Your Website Organically" />
      </VerticalAnimation>
      <VerticalAnimation delay={0.4}>
        <ArrowButton
          title="More articles"
          link="blog"
          className="border-transparent bg-[#292930] text-white mx-auto hover:bg-[#5956E8] hover:text-white"
          arrowImage={arrow}
        />
      </VerticalAnimation>
    </section>
  );
}
