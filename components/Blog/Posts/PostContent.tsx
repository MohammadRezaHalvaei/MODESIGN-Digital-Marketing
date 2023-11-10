import Image from "next/image";
import { Link } from "nextjs13-progress";

import quote from "@/public/images/blog/post/quote.png";
import insta from "@/public/images/blog/post/Insta.png";
import facebook from "@/public/images/blog/post/Fb.png";
import twitter from "@/public/images/blog/post/Twiter.png";
import linkedin from "@/public/images/blog/post/link.png";

export default function PostContent() {
  return (
    <section className="pt-24 pb-[150px] max-w-[900px] mx-auto px-6 max-lg:pt-12 max-lg:pb-10">
      <h3 className="h3-title font-bold leading-[53.28px] max-md:text-3xl mb-2">
        The Digital Marketing For All
      </h3>
      <p className="parag mb-11 max-sm:mb-8">
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
        reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
        repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
        Velit eius ab delectus temporibus.
        <br />
        <br />
        For dynamic content, add a rich text field to any collection and then
        connect a rich text element to that field in the settings panel.
        Headings, paragraphs, block-quotes, figures, images, and figure captions
        can all be styled.
      </p>
      <ol className="flex flex-col gap-9 mb-[90px] max-sm:gap-4 max-sm:mb-10">
        <li className="font-notoSans text-xl leading-8">
          <span className="font-bold">01.</span> Neque sodales ut etiam sit amet
          nisl purus non tellus orci ac auctor.
        </li>
        <li className="font-notoSans text-xl leading-8">
          <span className="font-bold">02.</span> Nostrum facere repellendus
          minus quod aut aliquam neque reiciendis.
        </li>
        <li className="font-notoSans text-xl leading-8">
          <span className="font-bold">03.</span> A rich text element can be used
          with static or dynamic content.
        </li>
        <li className="font-notoSans text-xl leading-8">
          <span className="font-bold">04.</span> Facere repellendus minus quod
          aut aliquam neque reiciendis.
        </li>
      </ol>
      <div className="bg-[#f2f2f2] rounded-[30px] py-[60px] px-[120px] mb-[90px] max-md:px-10 max-md:mb-10">
        <Image src={quote} alt="Quote" className="mb-5 mx-auto" />
        <p className="font-notoSans text-xl leading-8 italic text-center">
          <span className="text-[40px]">W</span>hen an unknown printegalley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting.
        </p>
      </div>
      <h3 className="h3-title font-bold leading-[53.28px] max-md:text-3xl mb-2">
        Make real time a work improvements
      </h3>
      <p className="parag mb-11 max-sm:mb-8">
        Bitcoin and blockchain technology introduce solutions for real-world
        issues, seeking to help the unbanked population, combat counterfeiting
        and improve cross-border transactions to name a few. Even if we
        disregard the notion of bitcoin as a speculative asset or store of
        value, it is likely here to stay and disrupt many sectors.
      </p>
      <ol className="flex flex-col gap-9 mb-[90px] max-sm:gap-4 max-sm:mb-14">
        <li className="font-notoSans text-xl leading-8 text-[#555]">
          01. the unbanked population, combat counterfeiting and improve
          cross-border.
        </li>
        <li className="font-notoSans text-xl leading-8 text-[#555]">
          02. transactions to name a few. Even if we disregard the notion of
          bitcoin as a speculative
        </li>
        <li className="font-notoSans text-xl leading-8 text-[#555]">
          03. Even if we disregard the notion of bitcoin as a speculative asset
          or store of value.
        </li>
      </ol>
      <div className="flex justify-between py-10">
        <h6 className="subtitle text-[#1B2534]">Share</h6>
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
          <Link target="_blank" href="https://Linkedin.com">
            <Image src={linkedin} alt="Linkedin" />
          </Link>
        </div>
      </div>
    </section>
  );
}
