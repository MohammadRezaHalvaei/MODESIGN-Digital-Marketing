import Tag from "@/components/Utils/Tag";
import Image from "next/image";

import icon from "@/public/images/about/offices/Icon.png";
import OfficesCard from "./OfficesCard";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";
import { Link } from "nextjs13-progress";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Offices() {
  return (
    <section className="bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA]">
      <div className="py-[150px] max-w-[1200px] mx-auto px-6 max-sm:px-4 max-lg:py-20">
        <div className="flex justify-between mb-14 items-center max-lg:flex-col max-lg:gap-10">
          <HorizontalAnimation
            xAxis={-100}
            delay={0.4}
            className="flex max-lg:flex-col max-lg:gap-6 max-lg:items-center"
          >
            <Image
              src={icon}
              alt="Locations"
              className="mr-10 max-w-[88px] max-h-[88px] max-lg:mr-0"
            />
            <div>
              <Tag
                title="01. services"
                className="mb-4 max-lg:block max-lg:text-center"
                slashColor="text-primary_b"
              />
              <h3 className="h3-title max-w-[620px] max-lg:text-center max-sm:text-3xl">
                High-impact services to take your business to the next level
              </h3>
            </div>
          </HorizontalAnimation>
          <HorizontalAnimation delay={0.4}>
            <Link href="/contact" className="btn-black self-end">
              Get in Touch
            </Link>
          </HorizontalAnimation>
        </div>
        <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {["usa", "ca", "usa"].map((loc, index) => (
            <VerticalAnimation key={index} delay={index * 0.3}>
              <OfficesCard location={loc} />
            </VerticalAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
