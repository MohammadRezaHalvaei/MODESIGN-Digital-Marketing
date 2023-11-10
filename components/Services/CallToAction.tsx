import { Link } from "nextjs13-progress";
import Image from "next/image";

import pattern from "@/public/images/services/pattern.svg";
import target from "@/public/images/services/target.png";
import OpacityAnimation from "@/utils/Animations/OpacityAnimation";
import RocketImage from "./RocketImage";

export default function CallToAction() {
  return (
    <section className="px-4">
      <div
        className="max-w-[1200px] bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] rounded-[30px] 
        my-[150px] mx-auto relative overflow-hidden"
      >
        <OpacityAnimation
          delay={0.6}
          className="max-w-[590px] py-[64px] ml-[70px] flex flex-col gap-14 relative z-30 px-4 max-sm:gap-10 
          max-lg:max-w-[430px] max-lg:ml-10 max-md:mx-auto max-md:text-center max-md:max-w-full max-sm:py-14"
        >
          <h2 className="h2-title font-extrabold max-lg:text-3xl max-sm:text-2xl">
            Get in touch and{" "}
            <span className="text-primary_b">start growing</span> your startup
            today
          </h2>
          <div className="flex gap-7 max-md:justify-center max-sm:flex-col">
            <Link href="contact-us" className="btn-black">
              Get in Touch
            </Link>
            <Link href="case-study" className="btn-white">
              Get Started
            </Link>
          </div>
        </OpacityAnimation>
        <div>
          <Image
            src={pattern}
            alt="Pattern"
            className="absolute right-0 top-0 max-md:hidden"
          />
          <OpacityAnimation delay={0.6}>
            <Image
              src={target}
              alt="target"
              className="absolute right-0 bottom-[10%] z-20 max-md:hidden"
            />
          </OpacityAnimation>
          <RocketImage />
          <div
            className="w-[352px] h-[352px] bg-[#CFDDEC] absolute rounded-full blur-[100px] z-10
          right-[2%] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
}
