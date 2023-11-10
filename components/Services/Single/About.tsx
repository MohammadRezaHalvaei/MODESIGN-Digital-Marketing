import Image from "next/image";
import Tag from "@/components/Utils/Tag";
import { CheckCircleFilled } from "@ant-design/icons";

import landing from "@/public/images/services/single/aboutLanding.png";
import blur from "@/public/images/services/single/blurBlue.png";
import icon from "@/public/images/home/about/aboutIcon.png";
import Process from "./Process";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

const lists = [
  "Dolor duis lorem enim eu turpis potenti nulla semper",
  "Lorem a eget blandit ac neque dapibus pulvinar",
  "Pellentesque non integer ac id imperdiet sit bibendum",
];

export default function About() {
  return (
    <section className="py-[150px] max-w-[1200px] mx-auto flex flex-col gap-[150px] px-6 max-sm:px-4 max-lg:py-20 max-lg:gap-16">
      <article className="grid grid-cols-[0.85fr_1.15fr] gap-16 max-xl:grid-cols-1 justify-items-center">
        <HorizontalAnimation xAxis={-100} className="relative">
          <Image src={landing} alt="About Service" />
          <Image
            src={blur}
            alt="blur"
            className="absolute top-0 right-0 -z-10 blur-[100px]"
          />
        </HorizontalAnimation>
        <HorizontalAnimation delay={0.4} className="flex flex-col gap-[30px]">
          <div className="flex pb-9 border-b border-[#CFCFCF]">
            <Image
              src={icon}
              alt="About"
              className="mr-10 min-w-[88px] h-[88px] max-md:mr-4"
            />
            <div>
              <Tag title="02. about this service" className="mb-4" />
              <h3 className="h3-title max-w-[620px] max-sm:text-2xl">
                We take your business reach from thousands to millions
              </h3>
            </div>
          </div>
          <p className="parag max-sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sollicitudinbibendum senectus scelerisque non. Turpis matis morbi
            vivera ipsum adipiscing Mauris volutpat sagittis, sit nulla. Velit
            et augues vitae Mattis at nibh nullas placerat imperdiet cursus
            viverra justo amet. Ipsum duis tempor.
          </p>
          <ul className="flex flex-col gap-6">
            {lists.map((list, index) => (
              <li
                className="lst text-xl leading-8 flex items-center gap-2.5 max-sm:text-base"
                key={index}
              >
                <CheckCircleFilled className="text-secondary_a text-[26px]" />{" "}
                {list}
              </li>
            ))}
          </ul>
        </HorizontalAnimation>
      </article>
      <Process />
    </section>
  );
}
