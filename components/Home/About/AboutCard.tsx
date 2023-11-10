import Image, { StaticImageData } from "next/image";

type AboutCardProps = {
  src: StaticImageData;
  title: string;
  desc: string;
};

export default function AboutCard({ src, title, desc }: AboutCardProps) {
  return (
    <div className="ml-auto max-w-[570px] flex max-xl:mx-auto">
      <div className="rounded-full border border-[#D5D5D5] min-w-[86px] h-[86px] flex items-center justify-center">
        <Image src={src} alt={title} />
      </div>
      <div>
        <h6 className="h6-title border-b border-[#CFCFCF] pt-[7px] pb-[8px] pl-[18px] max-sm:text-xl">
          {title}
        </h6>
        <p className="parag pt-[22px] pl-[18px] max-sm:text-base">{desc}</p>
      </div>
    </div>
  );
}
