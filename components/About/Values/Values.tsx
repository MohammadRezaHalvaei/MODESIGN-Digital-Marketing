import Image from "next/image";
import Slider from "./Slider";
import Tag from "@/components/Utils/Tag";

import icon from "@/public/images/about/values/Icon.png";
import ArrowButton from "@/components/Utils/ArrowButton";
import { Link } from "nextjs13-progress";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

export default function Values() {
  return (
    <section className="bg-secondary_a">
      <div className="max-w-[1200px] py-[150px] mx-auto flex flex-col gap-14 max-lg:py-20 px-4">
        <VerticalAnimation
          delay={0.4}
          className="text-center flex flex-col items-center text-white"
        >
          <Image src={icon} alt="Proccess" className="mb-[34px]" />
          <Tag
            title="02. our values"
            slashColor="text-primary_a"
            className="mb-3.5"
          />
          <h3 className="h3-title text-white max-sm:text-3xl">
            The core values behind our work
          </h3>
        </VerticalAnimation>
        <HorizontalAnimation delay={0.6}>
          <Slider />
        </HorizontalAnimation>
        <VerticalAnimation
          delay={0.6}
          className="flex gap-7 mx-auto max-[990px]:mt-20 max-[990px]:flex-col"
        >
          <Link
            href="/contact-us"
            className="btn-white border-white text-white hover:bg-white hover:text-secondary_a text-center"
          >
            Get in Touch
          </Link>
          <ArrowButton
            link="services"
            title="Our Services"
            className="max-[990px]:w-[300px] max-[990px]:justify-center"
          />
        </VerticalAnimation>
      </div>
    </section>
  );
}
