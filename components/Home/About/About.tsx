import Image from "next/image";
import Tag from "../../Utils/Tag";
import AboutCard from "./AboutCard";

import about from "@/public/images/home/about/about.png";
import icon from "@/public/images/home/about/aboutIcon.png";
import guranteed from "@/public/images/home/about/guranteed.svg";
import team from "@/public/images/home/about/team.svg";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

const cards = [
  {
    src: guranteed,
    title: "Guaranteed Results",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    src: team,
    title: "Team of Industry Experts",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.",
  },
];

export default function About() {
  return (
    <section className="max-w-[1240px] mx-auto pt-[140px] pb-20 grid grid-cols-[0.75fr_1fr] gap-8 px-10 max-xl:grid-cols-1 max-sm:px-4">
      <VerticalAnimation delay={0.4}>
        <Image
          src={about}
          alt="The #1 digital marketing services company"
          className="max-xl:mx-auto"
        />
      </VerticalAnimation>

      <article>
        <VerticalAnimation className="mb-[42px]" delay={0.4}>
          <div className="flex pb-[30px] border-b border-[#CFCFCF]">
            <Image
              src={icon}
              alt="About"
              className="mr-10 min-w-[88px] h-[88px] max-sm:mr-4"
            />
            <div>
              <Tag title="02. about us" className="mb-4" />
              <h3 className="h3-title max-w-[620px] max-sm:text-2xl">
                The #1 digital marketing services company
              </h3>
            </div>
          </div>
          <p className="parag pt-[30px] max-sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry ftyuu Ipsum has been the industry&apos;s standard book. It
            has survived not only five centuries, but also the leap into
            electronic typesetting.
          </p>
        </VerticalAnimation>
        <div className="flex flex-col gap-[50px]">
          {cards.map((card, index) => (
            <HorizontalAnimation key={card.title} delay={index * 0.3}>
              <AboutCard src={card.src} title={card.title} desc={card.desc} />
            </HorizontalAnimation>
          ))}
        </div>
      </article>
    </section>
  );
}
