import Image from "next/image";
import Tag from "../../Utils/Tag";

import icon from "@/public/images/home/testimonial/Icon.png";
import Slider from "./Slider";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

export default function Testimonial({ onHome = true }: { onHome?: boolean }) {
  return (
    <section className="max-w-[1200px] py-[180px] mx-auto relative px-10 max-sm:px-4 max-sm:py-[70px] max-sm:pb-[130px]">
      <HorizontalAnimation
        delay={0.4}
        className="flex mb-11 max-sm:mb-5"
        xAxis={-100}
      >
        <Image
          src={icon}
          alt="About"
          className="mr-10 min-w-[88px] h-[88px] max-sm:mr-3"
        />
        <div>
          <Tag
            title={`${onHome ? "04. testimonial" : "testimonial"}`}
            className="mb-4"
          />
          <h3 className="h3-title max-w-[620px] max-md:text-3xl max-sm:text-2xl max-sm:max-w-full">
            The #1 digital marketing services company
          </h3>
        </div>
      </HorizontalAnimation>
      <Slider />
    </section>
  );
}
