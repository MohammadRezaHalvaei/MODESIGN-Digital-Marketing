import Image from "next/image";
import Tag from "../Utils/Tag";

import target from "@/public/images/home/landing/target.png";
import qaulity from "@/public/images/home/landing/qaulity.svg";
import wave from "@/public/images/home/landing/wave.svg";
import star from "@/public/images/home/landing/star.svg";
import play from "@/public/images/home/landing/play.svg";
import pinkC from "@/public/images/home/landing/pinkCrc.svg";
import blueC from "@/public/images/home/landing/bluCrc.svg";
import pinkB from "@/public/images/home/landing/pinkBrd.svg";
import OpacityAnimation from "@/utils/Animations/OpacityAnimation";
import { Link } from "nextjs13-progress";

export default function HomeLanding() {
  return (
    <section
      className="bg-[url('/images/home/landing/landing.png')] -mt-[132px] max-lg:h-[135vh] 
      grid grid-cols-[1.1fr_0.9fr] gap-10 justify-items-center px-4 h-screen max-lg:grid-cols-1 max-lg:gap-0"
    >
      <OpacityAnimation
        className="flex flex-col gap-[34px] py-[200px] ml-auto max-w-[740px] z-10 
        max-lg:pt-[150px] max-lg:pb-[60px] max-lg:ml-0"
      >
        <div>
          <Tag
            title="agency"
            className="mb-7 max-lg:block max-lg:text-center"
          />
          <h1 className="h1-title max-xl:text-5xl max-lg:text-center max-sm:text-3xl">
            A fully integrated digital{" "}
            <span className="text-primary_b">marketing</span> agency
          </h1>
        </div>
        <p className="parag max-lg:text-center max-sm:text-base">
          We understand our customer’s needs and hence our work approach &
          systems will tend to know many things about the project result.
        </p>
        <div className="max-lg:text-center flex gap-5 max-lg:justify-center max-sm:flex-col">
          <Link href="/services" className="btn-black">
            Our Services
          </Link>
          <Link href="/contact" className="btn-white">
            Get Started
          </Link>
        </div>
      </OpacityAnimation>
      <OpacityAnimation
        delay={0.2}
        className="relative mt-[150px] ml-auto bg-[url('/images/home/landing/dashboard.png')] 
        w-[620px] h-[761px] bg-contain bg-no-repeat z-10 max-xl:w-[500px] max-lg:mt-0 max-lg:mx-auto max-lg:h-[500px] max-sm:w-[350px]"
      >
        <Image
          src={target}
          alt="Target"
          className="absolute bottom-[20%] right-0 max-xl:bottom-[25%] max-lg:bottom-[0%] max-sm:w-[80px] max-sm:bottom-[25%]"
        />

        <Image
          src={qaulity}
          alt="Qualified"
          className="absolute bottom-[40%] -left-3 max-lg:bottom-[10%] max-sm:bottom-[30%] max-sm:w-[100px]"
        />

        <Image
          src={wave}
          alt="Wave"
          className="absolute top-[0.2%] left-[18%] max-xl:-top-2"
        />
        <Image
          src={star}
          alt="Star"
          className="absolute top-[300px] right-[6%] max-sm:top-[30%]"
        />
        <Image
          src={play}
          alt="Play"
          className="absolute bottom-[35%] right-[55%]"
        />
      </OpacityAnimation>
      <Image src={pinkC} alt="Pink Circle" className="absolute mt-48 mr-32" />
      <Image
        src={blueC}
        alt="Blue Circle"
        className="absolute left-32 bottom-[20%]"
      />
      <Image
        src={pinkB}
        alt="Pink Circle"
        className="absolute left-[41%] bottom-[8%]"
      />
    </section>
  );
}
