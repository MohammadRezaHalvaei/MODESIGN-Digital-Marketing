import Image, { StaticImageData } from "next/image";
import ArrowButton from "../../Utils/ArrowButton";

type ServicesCardProps = {
  title: string;
  src: StaticImageData;
};

export default function ServicesCard({ title, src }: ServicesCardProps) {
  return (
    <div className="bg-gradient-to-b from-[#36363E] to-[#292930] rounded-[30px]  border border-[#424245]">
      <div className="p-10 flex flex-col gap-[26px] max-lg:items-center">
        <div className="w-[153px] h-[153px] bg-secondary_a rounded-full flex items-center justify-center">
          <Image src={src} alt={title} />
        </div>
        <div>
          <h6 className="h6-title mb-3.5 text-white max-lg:text-center max-sm:text-2xl">
            {title}
          </h6>
          <p className="parag text-[#D0D0D0] max-lg:text-center max-sm:text-base">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt.
          </p>
        </div>
        <ArrowButton
          title="Read More"
          className="btn-gold-large bg-transparent border-[#535355] text-[#525255] w-full justify-center"
          imageClass="grayscale-[100%] group-hover:grayscale-0"
          link={`services/${title.replaceAll(" ", "-")}`}
        />
      </div>
    </div>
  );
}
