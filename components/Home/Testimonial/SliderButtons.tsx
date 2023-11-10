import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSwiper } from "swiper/react";

export default function SliderButtons() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-5 mt-auto absolute top-60 right-5 z-50 max-lg:top-[85%] max-lg:right-1/2 max-lg:translate-x-1/2">
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[70px] h-[70px] bg-white shadow-[0_10px_15px_-1px_#c6c6c68c] 
        rounded-full dur-200 hover:text-white hover:bg-[#454545]"
      >
        <LeftOutlined style={{ fontSize: "26px" }} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[70px] h-[70px] bg-white shadow-[0_10px_15px_-1px_#c6c6c68c] 
        rounded-full dur-200 hover:text-white hover:bg-[#454545]"
      >
        <RightOutlined style={{ fontSize: "26px" }} />
      </button>
    </div>
  );
}
