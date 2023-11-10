import Image from "next/image";

import landing from "@/public/images/services/single/landing.png";
import blurBlue from "@/public/images/services/single/blurBlue.png";
import blurGreen from "@/public/images/services/single/blurGreen.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

export default function Landing() {
  return (
    <section
      className="max-w-[1200px] mx-auto pt-12 pb-[150px] grid grid-cols-2 gap-4 items-center px-6 max-sm:px-4 
      max-lg:pb-20 max-md:pt-20 max-md:grid-cols-1 max-md:gap-20"
    >
      <HorizontalAnimation
        delay={0.4}
        xAxis={-100}
        className="max-md:text-center"
      >
        <h1 className="h1-title mb-[30px] font-bold max-lg:text-5xl max-sm:text-3xl max-sm:mb-4">
          Social Media Marketing
        </h1>
        <p className="parag max-sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and industry ftyuu
          Ipsum has been the industry&apos;s not only five centuries, but also
          the leap into electronic typesetting.
        </p>
      </HorizontalAnimation>
      <HorizontalAnimation delay={0.4} className="relative max-md:row-start-1">
        <Image src={landing} alt="Landing" />
        <Image
          src={blurBlue}
          alt="Blue Blur"
          className="absolute bottom-0 right-0 blur-[100px] -z-10"
        />
        <Image
          src={blurGreen}
          alt="Green Blur"
          className="absolute bottom-0 left-0 blur-[100px] -z-10"
        />
      </HorizontalAnimation>
    </section>
  );
}
