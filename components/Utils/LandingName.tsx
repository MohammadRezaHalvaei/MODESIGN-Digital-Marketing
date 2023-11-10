import Image from "next/image";

import pattern from "@/public/images/utils/Landing/Pattern.svg";
import play from "@/public/images/utils/Landing/play.png";
import rect from "@/public/images/utils/Landing/rect.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import OpacityAnimation from "@/utils/Animations/OpacityAnimation";

type LandingNameProps = {
  title?: string | string[];
  bgLtoR: string[];
  blursLtoR: string[];
};

export default function LandingName({
  title,
  bgLtoR,
  blursLtoR,
}: LandingNameProps) {
  return (
    <div
      className="h-[600px] -mt-[130px] overflow-hidden relative flex items-center justify-center max-sm:h-[450px] max-md:-mt-[80px]"
      style={{
        background: `linear-gradient(to right,${bgLtoR?.at(0)}, ${bgLtoR?.at(
          1
        )})`,
      }}
    >
      <VerticalAnimation delay={0.2}>
        <div
          className={`w-[665px] h-[665px] rounded-full -mb-96 relative z-10 max-sm:w-[350px] max-sm:h-[350px] max-sm:-mb-80 ${
            title === "" || "bg-[#F4F6FB]"
          }`}
        >
          {title === "" || (
            <Image
              src={pattern}
              alt="Pattern"
              className="absolute top-20 right-1/2 translate-x-1/2 max-sm:w-[300px]"
            />
          )}
          <div className="h-[210px] w-[210px] bg-[#CFDDEC] rounded-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-[80%] blur-[100px]" />
          <OpacityAnimation
            delay={0.6}
            className="h1-title absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-[150%] w-full text-center max-sm:text-6xl max-sm:-translate-y-[70%]"
          >
            {typeof title === "string" ? (
              title
            ) : (
              <>
                {title?.at(0)}{" "}
                <span className="text-[#5956E8]">{title?.at(1)}</span>
              </>
            )}
          </OpacityAnimation>
        </div>
      </VerticalAnimation>

      <div
        className="h-[308px] w-[308px] rounded-full absolute -bottom-32 right-1/2 translate-x-[-30%] blur-[150px]"
        style={{ background: `${blursLtoR?.at(0)}` }}
      />
      <div
        className="h-[450px] w-[450px] rounded-full absolute -bottom-36 left-1/2 translate-x-[-5%] blur-[100px]"
        style={{ background: `${blursLtoR?.at(1)}` }}
      />
      <div
        className="h-[308px] w-[308px] rounded-full absolute bottom-1/2 -right-4 translate-y-1/2 blur-[110px]"
        style={{ background: `${blursLtoR?.at(2)}` }}
      />
      <Image
        src={play}
        alt="subtract"
        className="absolute right-[5%] top-1/2"
      />
      <Image src={rect} alt="subtract" className="absolute left-[5%] top-1/2" />
    </div>
  );
}
