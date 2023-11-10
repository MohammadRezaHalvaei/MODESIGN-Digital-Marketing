import Image, { StaticImageData } from "next/image";

import Link from "next/link";

type DetailsCardProps = {
  icon: StaticImageData;
  title: string;
  text: string;
  link: string;
  desc: string;
};

export default function DetailsCard({
  icon,
  title,
  text,
  link,
  desc,
}: DetailsCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] p-6 rounded-md">
      <div className="bg-white px-6 py-7 rounded-md">
        <h6 className="subtitle bg-primary_a py-2 px-6 inline-block rounded-full mb-8">
          {title}
        </h6>
        <div className="grid grid-cols-[0.15fr_0.85fr]">
          <Image src={icon} alt={text} className="min-w-[32px] h-6" />
          <div>
            <h6 className="h6-title mb-2">{text}</h6>
            <Link
              href={link}
              className="parag"
              target={`${text === "Location" ? "_blank" : ""}`}
            >
              {desc}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
