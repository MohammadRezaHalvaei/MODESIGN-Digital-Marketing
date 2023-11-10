import Image from "next/image";
import Tag from "@/components/Utils/Tag";
import SingleServicesCard from "./SingleServicesCard";

import icon from "@/public/images/home/services/services.png";
import content from "@/public/images/services/single/content.png";
import brand from "@/public/images/services/single/brand.png";
import video from "@/public/images/services/single/video.png";
import paid from "@/public/images/services/single/paid.png";
import audit from "@/public/images/services/single/audits.png";
import media from "@/public/images/services/single/media.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import { Link } from "nextjs13-progress";

const cards = [
  { src: content, title: "Content Strategy" },
  { src: brand, title: "Brand Awareness" },
  { src: video, title: "Video Marketing" },
  { src: paid, title: "Social Paid Advertising" },
  { src: audit, title: "Social Audits" },
  { src: media, title: "Social Media Management" },
];

export default function Services() {
  return (
    <section className="bg-secondary_a">
      <div className="max-w-[1200px] mx-auto py-[150px] px-6 max-sm:px-4 max-lg:py-20">
        <VerticalAnimation
          delay={0.2}
          className="text-center flex flex-col items-center text-white max-w-[600px] mx-auto mb-[50px]"
        >
          <Image src={icon} alt="Proccess" className="mb-[34px]" />
          <Tag
            title="01. our services"
            slashColor="text-primary_a"
            className="mb-3.5"
          />
          <h3 className="h3-title text-white max-sm:text-3xl">
            We have extensive experience in Social Media Marketing
          </h3>
        </VerticalAnimation>
        <div className="grid grid-cols-3 gap-[30px] mb-[50px] justify-items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
          {cards.map((card, index) => (
            <VerticalAnimation
              key={card.title}
              yAxis={-100}
              ease={[0.175, 0.885, 0.32, 2]}
              delay={index * 0.2}
            >
              <SingleServicesCard src={card.src} title={card.title} />
            </VerticalAnimation>
          ))}
        </div>
        <VerticalAnimation delay={0.4}>
          <Link
            href="/contact"
            className="btn-black border-white hover:bg-white block w-fit mx-auto"
          >
            Get in Touch
          </Link>
        </VerticalAnimation>
      </div>
    </section>
  );
}
