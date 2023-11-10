import Image, { StaticImageData } from "next/image";

type ProcessCardProps = {
  title: string;
  src: StaticImageData;
};

export default function ProcessCard({ title, src }: ProcessCardProps) {
  return (
    <div className="flex gap-[26px] max-sm:gap-4">
      <div
        className="h-[86px] min-w-[86px] bg-white rounded-full flex items-center 
        justify-center border-[9px] border-[#FFD1C8] z-10"
      >
        <Image src={src} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="h6-title max-sm:text-xl">{title}</h6>
        <p className="parag max-sm:text-base">
          consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm{" "}
        </p>
      </div>
    </div>
  );
}
