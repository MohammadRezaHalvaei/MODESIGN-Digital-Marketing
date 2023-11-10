import Image from "next/image";

import icon from "@/public/images/home/case/Icon.png";
import Tag from "../../Utils/Tag";
import ArrowButton from "../../Utils/ArrowButton";
import Accodrion from "./Accodrion";
import Experinces from "./Experiences";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const exps = [
  { num: 325, numColor: "5956E8", text: "Clients Worldwide" },
  { num: 975, numColor: "FF1850", text: "Projects Completed" },
  { num: 70, numColor: "FFDC60", text: "Team Members" },
  { num: "85m", numColor: "38E55E", text: "Revenue Generated" },
];

export default function CaseStudy() {
  return (
    <section className="bg-secondary_a px-8 max-sm:px-4">
      <div className="max-w-[1200px] py-[160px] mx-auto flex flex-col gap-[100px] max-lg:py-20 max-lg:gap-14">
        <div className="flex justify-between items-center max-lg:flex-col">
          <HorizontalAnimation
            className="flex max-lg:flex-col max-lg:gap-6 max-lg:text-center max-lg:items-center"
            xAxis={-100}
            delay={0.4}
          >
            <Image
              src={icon}
              alt="Case Studies"
              className="mr-10 min-w-[88px] h-[88px] max-lg:mr-0"
            />
            <div>
              <Tag
                title="05. Case studies"
                className="mb-4 text-[#D0D0D0] max-lg:text-center max-lg:block"
              />
              <h3 className="h3-title text-white max-w-[620px] max-sm:text-2xl">
                Browse our latest case study on Marketing Agency
              </h3>
            </div>
          </HorizontalAnimation>
          <HorizontalAnimation delay={0.4}>
            <ArrowButton
              title="Case Studies"
              link="case-study"
              className="max-lg:mt-6"
            />
          </HorizontalAnimation>
        </div>
        <VerticalAnimation delay={0.4}>
          <Accodrion />
        </VerticalAnimation>

        <div className="border-t border-[#5D5D63] pt-[68px] grid grid-cols-4 justify-items-center max-lg:grid-cols-2 gap-6 max-sm:grid-cols-1">
          {exps.map((exp, index) => (
            <VerticalAnimation key={index} delay={index * 0.2}>
              <Experinces
                num={exp.num}
                numColor={exp.numColor}
                text={exp.text}
              />
            </VerticalAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
