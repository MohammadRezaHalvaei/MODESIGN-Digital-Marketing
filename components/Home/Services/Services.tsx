import Image from "next/image";
import Tag from "../../Utils/Tag";
import ArrowButton from "../../Utils/ArrowButton";
import ServicesCard from "./ServicesCard";

import services from "@/public/images/home/services/services.png";
import social from "@/public/images/home/services/social.png";
import paid from "@/public/images/home/services/paid.png";
import advanced from "@/public/images/home/services/advanced.png";
import seo from "@/public/images/home/services/seo.png";
import funnel from "@/public/images/home/services/funnel.png";
import condent from "@/public/images/home/services/condent.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";
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
    <section className="bg-secondary_a px-8 max-lg:px-4">
      <div className="py-44 flex flex-col gap-[90px] max-w-[1210px] mx-auto max-lg:py-20">
        <div className="flex justify-between gap-4 max-lg:flex-col max-lg:gap-6">
          <HorizontalAnimation
            className="flex max-lg:flex-col max-lg:gap-6 max-lg:text-center"
            xAxis={-100}
          >
            <Image
              src={services}
              alt="Services"
              className="mr-10 min-w-[88px] h-[88px] max-lg:mx-auto"
            />
            <div>
              <Tag
                title="01. services"
                className="mb-4 text-[#D0D0D0] max-lg:block"
              />
              <h3 className="h3-title text-white max-xl:text-2xl">
                High-impact services to take your business to the next level
              </h3>
            </div>
          </HorizontalAnimation>
          <HorizontalAnimation>
            <ArrowButton
              title="Our Services"
              link="services"
              className="h-fit max-lg:mx-auto"
            />
          </HorizontalAnimation>
        </div>
        <div className="grid grid-cols-3 gap-x-[72px] gap-y-[67px] max-xl:grid-cols-2 max-lg:grid-cols-1">
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
