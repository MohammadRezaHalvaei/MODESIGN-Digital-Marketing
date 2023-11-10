import Image, { StaticImageData } from "next/image";
import ArrowButton from "../../Utils/ArrowButton";

type ServicesCardProps = {
  title: string;
  src: StaticImageData;
};

export default function SingleServicesCard({ title, src }: ServicesCardProps) {
  return (
    <div
      className="bg-gradient-to-b from-[#36363E] to-[#292930] rounded-[30px]
      border border-[#424245] w-full"
    >
      <div className="p-10 flex flex-col gap-[26px] items-center">
        <div className="w-[153px] h-[153px] bg-secondary_a rounded-full flex items-center justify-center">
          <Image src={src} alt={title} />
        </div>
        <div className="text-center">
          <h6 className="h6-title mb-3.5 text-white max-sm:text-xl">{title}</h6>
          <p className="parag text-[#D0D0D0] max-sm:text-base">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do
            semper dalaracc lacus vel facilisis volutpat est velitolm.
          </p>
        </div>
      </div>
    </div>
  );
}
