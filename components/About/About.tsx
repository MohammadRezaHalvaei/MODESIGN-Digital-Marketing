import Image from "next/image";
import Tag from "../Utils/Tag";

import services from "@/public/images/about/services.png";
import blur from "@/public/images/about/blur.png";
import icon from "@/public/images/home/about/aboutIcon.png";
import goals from "@/public/images/about/Goals.png";
import megaphone from "@/public/images/about/Megaphone.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";
import { Link } from "nextjs13-progress";

export default function About() {
  return (
    <section className="max-w-[1200px] grid grid-cols-[0.85fr_1.1fr] py-[150px] mx-auto gap-10 px-4 max-xl:grid-cols-1 max-lg:py-20">
      <HorizontalAnimation xAxis={-100} delay={0.4} className="relative">
        <Image src={services} alt="Services" className="z-10 relative" />
        <Image
          src={blur}
          alt="Blur"
          className="absolute right-0 bottom-[20%] blur-[100px]"
        />
      </HorizontalAnimation>
      <HorizontalAnimation delay={0.4} className="flex flex-col gap-9">
        <div className="flex pb-9 border-b border-[#CFCFCF] max-xl:justify-center">
          <Image
            src={icon}
            alt="About"
            className="mr-10 min-w-[88px] h-[88px] max-sm:mr-4"
          />
          <div>
            <Tag title="01. about us" className="mb-4" />
            <h3 className="h3-title max-w-[620px] max-sm:text-2xl">
              The #1 digital marketing services company
            </h3>
          </div>
        </div>
        <div className="flex justify-between max-xl:justify-evenly max-md:flex-col max-md:gap-4">
          <div className="flex gap-[18px] bg-secondary_a rounded-[10px] items-center p-4">
            <Image src={goals} alt="Goals" />
            <h6 className="h6-title text-white">Development Scale</h6>
          </div>
          <div className="flex gap-[18px] bg-secondary_a rounded-[10px] items-center p-4 max-md:h-20">
            <Image src={megaphone} alt="MegaPhone" />
            <h6 className="h6-title text-white">Research & Strategy</h6>
          </div>
        </div>
        <p className="parag max-xl:text-center max-sm:text-base">
          Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla
          aliquam Aliquam vestibulum libero morbi blandit cursus risus. Laoreet
          non curabitur gravida arcu ac tortor semper vivera nam libero justo
          laoreet mollis aliquam ut porttitor leo a diam.
        </p>
        <Link href="/contact" className="btn-white w-fit px-9 max-xl:mx-auto">
          Get in touch
        </Link>
      </HorizontalAnimation>
    </section>
  );
}
