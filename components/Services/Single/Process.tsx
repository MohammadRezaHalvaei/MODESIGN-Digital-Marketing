import { CheckCircleFilled } from "@ant-design/icons";
import ProcessCard from "./ProcessCard";

import social from "@/public/images/services/single/social media.png";
import publish from "@/public/images/services/single/publishing.png";
import measure from "@/public/images/services/single/measure.png";
import HorizontalAnimation from "@/utils/Animations/HorizontalAnimation";

const lists = [
  "Dolor duis lorem enim eu nulla semper",
  "Lorem a eget blandit ac neque pulvinar",
  "Pellentesque non integer ac id bibendum",
];

const processes = [
  { src: social, title: "Social Media Content Plan" },
  { src: publish, title: "Publishing & Execution" },
  { src: measure, title: "Measure & Scale" },
];

export default function Process() {
  return (
    <section
      className="bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA]
      py-[150px] rounded-[10px] px-6 max-sm:px-4 max-lg:py-16"
    >
      <div className="max-w-[970px] mx-auto grid grid-cols-2 gap-[50px] max-lg:grid-cols-1">
        <HorizontalAnimation xAxis={-100} delay={0.4}>
          <h3 className="h3-title pb-[18px] border-b border-[#CFCFCF] mb-6 max-sm:text-3xl max-lg:text-center">
            Our bulletproof process to win on Social Media
          </h3>
          <p className="parag mb-[30px] max-sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sollicitudinbibendum senectus scelerisque non. Turpis matis morbi
            vivera ipsum adipiscing Mauris volutpat Ipsum duis tempor.
          </p>
          <ul className="flex flex-col gap-6 max-sm:gap-4">
            {lists.map((list, index) => (
              <li
                className="lst text-xl leading-8 flex items-center gap-2.5  max-sm:text-base"
                key={index}
              >
                <CheckCircleFilled className="text-secondary_a text-[26px]  max-sm:text-[20px]" />{" "}
                {list}
              </li>
            ))}
          </ul>
        </HorizontalAnimation>
        <HorizontalAnimation delay={0.4} className="relative h-fit">
          <div className="flex flex-col gap-[50px]">
            {processes.map((process) => (
              <ProcessCard
                key={process.title}
                src={process.src}
                title={process.title}
              />
            ))}
          </div>
          <div className="border-dashed border-r-2 border-[#E38676] absolute top-1/2 -translate-y-1/2 h-[80%] left-[9%] max-lg:left-[40px]" />
        </HorizontalAnimation>
      </div>
    </section>
  );
}
