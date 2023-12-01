"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import efficiency from "@/public/images/about/values/Efficiency.png";
import accountability from "@/public/images/about/values/Accountability.png";
import commitment from "@/public/images/about/values/Commitment.png";
import teamWork from "@/public/images/about/values/Team-Work.png";
import SliderButtons from "./SliderButtons";

const slides = [
  { src: efficiency, title: "Efficiency" },
  { src: accountability, title: "Accountability" },
  { src: commitment, title: "Commitment" },
  { src: teamWork, title: "Team Work" },
];

type SliderCardProps = {
  src: StaticImageData;
  title: string;
};

import { Grid } from "antd";
const { useBreakpoint } = Grid;

function SliderCard({ src, title }: SliderCardProps) {
  return (
    <div
      className="bg-gradient-to-b from-[#36363E] to-[#292930] border border-[#424245] 
      py-12 max-w-[350px] mx-auto rounded-[30px] text-center px-10 dur-400 hover:-translate-y-3"
    >
      <div className="bg-secondary_a max-w-[153px] h-[153px] rounded-full flex justify-center items-center mx-auto mb-6">
        <Image src={src} alt={title} />
      </div>
      <h6 className="h6-title text-white mb-3.5">{title}</h6>
      <p className="parag text-[#D0D0D0] mb-11">
        Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper
        dalaracc lacus vel facilisis volutpat est velitolm.
      </p>
      <div className="border-b-[2.5px] border-white w-20 mx-auto" />
    </div>
  );
}

export default function Slider() {
  const screens = useBreakpoint();

  return (
    <div className="relative max-xl:max-w-[1050px] max-[1200px]:w-[700px] mx-auto max-md:w-[350px]">
      <Swiper
        slidesPerView={!screens.lg ? 1 : !screens.xl ? 2 : 3}
        spaceBetween={20}
        className="swiper-values"
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <SliderCard src={slide.src} title={slide.title} />
          </SwiperSlide>
        ))}
        <SliderButtons />
      </Swiper>
    </div>
  );
}
