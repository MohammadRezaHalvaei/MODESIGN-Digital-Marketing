"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SliderItem from "./SliderItem";

import google from "@/public/images/home/testimonial/company.svg";
import designer from "@/public/images/home/testimonial/companyP.svg";
import john from "@/public/images/home/testimonial/john.png";
import peeter from "@/public/images/home/testimonial/peeter.png";
import SliderButtons from "./SliderButtons";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const slides = [
  {
    personSrc: john,
    companySrc: google,
    name: "John Carter",
    role: "Marketing Lead at Google",
    text: "“Professional team of the Promote Digital Marketing professionals. They know what they are doing with the current digital word”.😇",
  },
  {
    personSrc: peeter,
    companySrc: designer,
    name: "Peeter pawl",
    role: "Designer",
    text: "“Firstly, I would like to thank the entire team of the Promote digital team for their hard work and the dedication. Whenever we needed help”😇",
  },
  {
    personSrc: john,
    companySrc: google,
    name: "Ray Volver",
    role: "Developer",
    text: "“Working with Promote has been a pleasure. The work is done by the talented Promote technical team and their digital marketing”.😇",
  },
  {
    personSrc: peeter,
    companySrc: designer,
    name: "Sil Antra",
    role: "CEO Client Tech",
    text: "“Professional team of the Promote Digital Marketing professionals. They know what they are doing with the current digital word”😇",
  },
];

const { useBreakpoint } = Grid;

export default function Slider() {
  const screens = useBreakpoint();

  return (
    <VerticalAnimation delay={0.4}>
      <Swiper
        slidesPerView={screens.xl === false ? 1 : 2}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.name}>
            <SliderItem
              personSrc={slide.personSrc}
              companySrc={slide.companySrc}
              name={slide.name}
              role={slide.role}
              text={slide.text}
            />
          </SwiperSlide>
        ))}

        <SliderButtons />
      </Swiper>
    </VerticalAnimation>
  );
}
