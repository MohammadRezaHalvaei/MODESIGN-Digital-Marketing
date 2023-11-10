import Image from "next/image";
import Tag from "../Utils/Tag";

import icon from "@/public/images/contact/faq-icon.png";
import Accodrion from "./Accordion";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Faq() {
  return (
    <section className="max-w-[900px] mx-auto py-[150px] px-6 max-sm:px-4 max-lg:py-16">
      <VerticalAnimation
        delay={0.4}
        className="text-center flex flex-col items-center mb-[50px]"
      >
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag title="02. FAQ" slashColor="text-primary_b" className="mb-3.5" />
        <h3 className="h3-title max-sm:text-3xl">Frequently Asked Questions</h3>
      </VerticalAnimation>
      <Accodrion />
    </section>
  );
}
