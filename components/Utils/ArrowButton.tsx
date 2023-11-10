import Image, { StaticImageData } from "next/image";
import arrow from "@/public/images/home/services/arrow.svg";
import { Link } from "nextjs13-progress";

type ArrowButtonProps = {
  title: string;
  className?: string;
  imageClass?: string;
  link: string;
  arrowImage?: StaticImageData;
};

export default function ArrowButton({
  title,
  className,
  imageClass,
  link,
  arrowImage = arrow,
}: ArrowButtonProps) {
  return (
    <Link href={`/${link}`} className={`btn-arrow group ${className}`}>
      {title}{" "}
      <Image
        src={arrowImage}
        alt="arrow"
        className={`dur-400 group-hover:translate-x-1.5 ${imageClass}`}
      />
    </Link>
  );
}
