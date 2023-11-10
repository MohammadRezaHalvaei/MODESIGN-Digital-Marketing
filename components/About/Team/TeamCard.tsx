import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

import facebook from "@/public/images/about/team/Facebook.png";
import twitter from "@/public/images/about/team/Twitter.png";
import instagram from "@/public/images/about/team/Instagram.png";

type TeamCardProps = {
  src: StaticImageData;
  name: string;
  role: string;
  hasInsta?: boolean;
};

export default function TeamCard({
  src,
  name,
  role,
  hasInsta = true,
}: TeamCardProps) {
  return (
    <div
      className="rounded-[30px] p-6 pb-12 border border-[#DCDCDC] flex flex-col 
      items-center relative group"
    >
      <Image src={src} alt={name} className="mb-[30px] max-md:w-full" />
      <div className="w-20 border-t-[2.5px] border-[#5956E8] mx-auto" />
      <div className="py-6 text-center">
        <h6 className="h6-title mb-2">{name}</h6>
        <p className="parag">{role}</p>
      </div>
      <div className="flex gap-2.5">
        <Link href="https://www.facebook.com">
          <Image src={facebook} alt="Facebook" />
        </Link>
        <Link href="https://www.Twitter.com">
          <Image src={twitter} alt="Twitter" />
        </Link>
        {hasInsta && (
          <Link href="https://www.instagram.com">
            <Image src={instagram} alt="Instagram" />
          </Link>
        )}
      </div>
      <div
        className="bg-gradient-to-br from-[#E9F7FF] via-[#FFDBD4] to-[#FFF3CA] 
        absolute top-0 left-0 right-0 bottom-0 rounded-[30px] dur-400 -z-10 opacity-0 group-hover:opacity-100"
      />
    </div>
  );
}
