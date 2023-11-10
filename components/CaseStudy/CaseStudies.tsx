import Image from "next/image";
import Tag from "../Utils/Tag";

import icon from "@/public/images/case/Icon.png";
import CaseCard from "./CaseCard";
import { fetchCases } from "@/utils/fetchCases";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default async function CaseStudies() {
  const cases = await fetchCases();

  return (
    <section className="max-w-[1200px] py-[150px] mx-auto px-6 max-lg:py-16 max-sm:px-4">
      <VerticalAnimation
        delay={0.4}
        className="text-center flex flex-col items-center mb-[50px]"
      >
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag
          title="01. case studies"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-3xl">Browse our case studies</h3>
      </VerticalAnimation>
      <div className="flex flex-col gap-[50px] max-sm:gap-7">
        {cases?.map((item, index) => (
          <VerticalAnimation key={item.id} delay={index * 0.2}>
            <CaseCard
              bgColor={item.bgColor}
              desc={item.desc}
              logo={item.icon}
              postImage={item.img}
              title={item.title}
            />
          </VerticalAnimation>
        ))}
      </div>
    </section>
  );
}
