import Image from "next/image";
import { Link } from "nextjs13-progress";

import notfound from "@/public/images/utils/404.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function NotFound() {
  return (
    <main className="pt-[90px] pb-[150px] max-w-[670px] mx-auto text-center px-4 max-sm:pb-16">
      <VerticalAnimation delay={0.4}>
        <Image src={notfound} alt="404" className="mb-[34px] w-full" />
        <h3 className="h3-title mb-7 max-sm:text-3xl max-sm:mb-3">
          Oops, this page is not found
        </h3>
        <p className="parag mb-[34px] max-sm:mb-5 max-sm:text-base">
          The page you are looking for doesn&apos;t exist. Please try searching
          or return to the website&apos;s homepage to find what you&apos;re
          looking for.
        </p>
      </VerticalAnimation>
      <VerticalAnimation delay={0.6}>
        <Link href="/" className="btn-black inline-block">
          Go To Homepage
        </Link>
      </VerticalAnimation>
    </main>
  );
}
