import Image from "next/image";
import Tag from "../Utils/Tag";
import AboutCard from "./About/AboutCard";

import icon from "@/public/images/home/benefits/Icon.png";
import benefit from "@/public/images/home/benefits/Graphics.png";
import page from "@/public/images/home/benefits/page.svg";
import site from "@/public/images/home/benefits/site.svg";
import report from "@/public/images/home/benefits/reporting.svg";
import blur from "@/public/images/home/benefits/blur.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

const desc =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const cards = [
  {
    src: page,
    title: "Page Rankings",
    desc,
  },
  {
    src: site,
    title: "Site Optimisation",
    desc,
  },
  {
    src: report,
    title: "Reporting & Analysis",
    desc,
  },
];

export default function Benefits() {
  return (
    <section
      className="pb-[120px] max-w-[1200px] mx-auto grid grid-cols-2 gap-x-4 border-b border-[#CCCCCC] px-8 
      max-lg:px-4 max-lg:grid-cols-1 max-sm:pb-[80px]"
    >
      <HorizontalAnimation delay={0.1} xAxis={-100}>
        <div className="flex mb-[34px] max-lg:justify-center">
          <Image
            src={icon}
            alt="Benefits"
            className="mr-10 min-w-[88px] h-[88px] max-sm:mr-4"
          />
          <div>
            <Tag title="07. benefits" className="mb-4" />
            <h3 className="h3-title max-w-[612px] max-sm:text-2xl">
              Benifit of working with Maruncy
            </h3>
          </div>
        </div>
        <div className="relative">
          <Image
            src={benefit}
            alt="Benefit Image"
            className="ml-auto max-lg:w-full"
          />
          <Image
            src={blur}
            alt="blur"
            className="absolute bottom-0 -z-10 blur-[100px] max-lg:hidden"
          />
        </div>
      </HorizontalAnimation>
      <aside>
        <div className="flex flex-col gap-[47px]">
          {cards.map((card, index) => (
            <HorizontalAnimation key={card.title} delay={index * 0.2}>
              <AboutCard src={card.src} title={card.title} desc={card.desc} />
            </HorizontalAnimation>
          ))}
        </div>
      </aside>
    </section>
  );
}
