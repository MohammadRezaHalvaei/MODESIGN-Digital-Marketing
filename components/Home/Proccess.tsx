import Image from "next/image";
import Tag from "../Utils/Tag";

import icon from "@/public/images/home/proccess/Icon.svg";
import marketing from "@/public/images/home/proccess/marketing.png";
import work from "@/public/images/home/proccess/work.png";
import growth from "@/public/images/home/proccess/growth.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Proccess() {
  return (
    <VerticalAnimation
      delay={0.4}
      className="max-w-[1240px] px-10 mx-auto bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] py-[140px] max-sm:px-4 max-sm:py-[70px]"
    >
      <div className="max-w-[525px] mx-auto text-center flex flex-col items-center mb-16">
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag
          title="03. proccess"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-3xl">
          A simple, yet powerful and efficient process
        </h3>
      </div>
      <article className="grid grid-cols-1 justify-items-center relative max-w-[1100px] mx-auto gap-10 max-md:gap-y-16">
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-0 gap-36 w-full justify-items-center">
          <Image
            src={marketing}
            alt="Marketing"
            className="max-md:w-full max-md:-mb-4"
          />
          <div className="flex flex-col justify-center max-w-[332px] max-md:text-center">
            <h6 className="h6-title mb-4">Marketing Plan</h6>
            <p className="parag">
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-6 gap-36 w-full justify-items-center">
          <div className="flex flex-col justify-center max-w-[332px] text-right max-md:text-center">
            <h6 className="h6-title mb-4">Work Execution</h6>
            <p className="parag">
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </p>
          </div>
          <Image
            src={work}
            alt="Work"
            className="max-md:w-full"
            style={{ gridRowStart: 1 }}
          />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-6 gap-36 w-full justify-items-center">
          <Image src={growth} alt="Growth" className="max-md:w-full" />
          <div className="flex flex-col justify-center max-w-[332px] max-md:text-center">
            <h6 className="h6-title mb-4">Growth & Scale</h6>
            <p className="parag">
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col gap-56 top-1/2 -translate-y-1/2 z-10 max-lg:hidden">
          <div className="h-[86px] w-[86px] border-[9px] border-[#FFD1C8] rounded-full flex items-center justify-center bg-white">
            <h5 className="h5-title">1</h5>
          </div>
          <div className="h-[86px] w-[86px] border-[9px] border-[#FFD1C8] rounded-full flex items-center justify-center bg-white">
            <h5 className="h5-title">2</h5>
          </div>
          <div className="h-[86px] w-[86px] border-[9px] border-[#FFD1C8] rounded-full flex items-center justify-center bg-white">
            <h5 className="h5-title">3</h5>
          </div>
        </div>
        <div className="border-r-2 border-[#E38676] h-[80%] border-dashed absolute top-20 max-lg:hidden" />
      </article>
    </VerticalAnimation>
  );
}
