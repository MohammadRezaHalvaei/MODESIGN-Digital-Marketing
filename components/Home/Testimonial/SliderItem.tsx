import Image, { StaticImageData } from "next/image";
import { Rate } from "antd";

type SliderItemProps = {
  companySrc: StaticImageData;
  name: string;
  role: string;
  personSrc: StaticImageData;
  text: string;
};

export default function SliderItem({
  companySrc,
  name,
  role,
  personSrc,
  text,
}: SliderItemProps) {
  return (
    <div className="flex flex-col gap-9 items-center">
      <div className="py-12 px-9 shadow-[0_2px_3px_1px_#92929240]">
        <div
          className="flex justify-between pb-5 border-b border-[#ECECEC] 
          max-[550px]:flex-col"
        >
          <div className="flex gap-1.5 max-sm:mx-auto">
            <Image src={companySrc} alt="Company Logo" />
            <h4 className="font-notoSans text-[25px] font-bold leading-[39.13px] text-secondary_a">
              Company
            </h4>
          </div>
          <Rate
            disabled
            defaultValue={5}
            style={{
              color: "#FFB545",
              fontSize: "33px",
              textAlign: "center",
              marginTop: "10px",
            }}
          />
        </div>
        <p className="parag pt-5">{text}</p>
      </div>
      <div className="flex gap-3 items-center self-start pl-1">
        <Image src={personSrc} alt={name} />
        <div>
          <h6 className="subtitle font-bold">{name}</h6>
          <p className="parag">{role}</p>
        </div>
      </div>
    </div>
  );
}
