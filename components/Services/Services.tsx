import Image from "next/image";
import Tag from "../Utils/Tag";

import icon from "@/public/images/home/services/services.png";
import social from "@/public/images/home/services/social.png";
import paid from "@/public/images/home/services/paid.png";
import advanced from "@/public/images/home/services/advanced.png";
import seo from "@/public/images/home/services/seo.png";
import funnel from "@/public/images/home/services/funnel.png";
import condent from "@/public/images/home/services/condent.png";
import ServicesCard from "../Home/Services/ServicesCard";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const cards = [
  { title: "Social Media Marketing", src: social },
  { title: "Paid Advertising", src: paid },
  { title: "Advanced Analytics", src: advanced },
  { title: "SEO Optimization", src: seo },
  { title: "Funnel Optimization", src: funnel },
  { title: "Condent Marketing", src: condent },
];

export default function Services() {
  return (
    <section className="bg-secondary_a">
      <div className="max-w-[1200px] mx-auto py-[150px] px-6 max-sm:px-4 max-lg:py-20">
        <VerticalAnimation
          delay={0.4}
          className="text-center flex flex-col items-center text-white max-w-[780px] mx-auto mb-[52px]"
        >
          <Image src={icon} alt="Proccess" className="mb-[34px]" />
          <Tag
            title="01. services"
            slashColor="text-primary_a"
            className="mb-3.5"
          />
          <h3 className="h3-title text-white max-sm:text-3xl">
            High-impact services to take your business to the next level
          </h3>
        </VerticalAnimation>
        <div className="grid grid-cols-3 gap-x-[72px] gap-y-[67px] max-xl:grid-cols-2 max-lg:grid-cols-1 max-xl:gap-10">
          {cards.map((card, index) => (
            <VerticalAnimation
              key={card.title}
              delay={index * 0.2}
              yAxis={-100}
              ease={[0.175, 0.885, 0.32, 2]}
            >
              <ServicesCard src={card.src} title={card.title} />
            </VerticalAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
