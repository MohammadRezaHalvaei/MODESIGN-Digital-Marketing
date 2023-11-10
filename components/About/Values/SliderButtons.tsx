import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwiper } from "swiper/react";

export default function SliderButtons() {
  const swiper = useSwiper();

  return (
    <div
      className="flex justify-between w-[1300px] max-xl:w-[1150px] max-[1200px]:w-[820px] max-[990px]:justify-evenly max-[990px]:translate-y-[400%] max-sm:w-[360px]
      items-center mx-auto absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 z-50"
    >
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[70px] h-[70px] bg-[#454545] text-white
        rounded-full dur-200 hover:bg-[#5956E8]"
      >
        <LeftOutlined style={{ fontSize: "26px" }} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[70px] h-[70px] bg-[#454545] text-white
        rounded-full dur-200 hover:bg-[#5956E8]"
      >
        <RightOutlined style={{ fontSize: "26px" }} />
      </button>
    </div>
  );
}
