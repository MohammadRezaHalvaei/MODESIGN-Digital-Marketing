import Image from "next/image";
import Tag from "../Utils/Tag";
import DetailsCard from "./DetailsCard";

import icon from "@/public/images/contact/Icon.png";

import email from "@/public/images/contact/email.png";
import phone from "@/public/images/contact/call.png";
import location from "@/public/images/contact/location.png";
import DetailsForm from "./DetailsForm";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const cards = [
  {
    src: email,
    title: "Contact",
    text: "Email",
    link: "mailto:mamad76ha@gmail.com",
    desc: "mamad76ha@gmail.com",
  },
  {
    src: phone,
    title: "Call",
    text: "Phone",
    link: "tel:+989357910493",
    desc: "+98 935 791 0493",
  },
  {
    src: location,
    title: "Office",
    text: "Location",
    link: "https://www.google.com/maps/place/Imamzadeh+Hasan/@35.6839313,51.3484515,13.9z/data=!4m6!3m5!1s0x3f8e006e762a5355:0xa077bb8c5b4b5865!8m2!3d35.6642637!4d51.3597145!16s%2Fg%2F1tgtczks?entry=ttu",
    desc: "Iran - Tehran - District 17",
  },
];

export default function Details() {
  return (
    <section className="max-w-[1200px] py-[150px] mx-auto max-lg:py-16 px-6 max-sm:px-4">
      <VerticalAnimation
        delay={0.4}
        className="text-center flex flex-col items-center mb-[60px]"
      >
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag
          title="01. Contact Us"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-3xl">
          Let&apos;s build something awesome together
        </h3>
      </VerticalAnimation>
      <div className="grid grid-cols-3 gap-[30px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        {cards.map((card, index) => (
          <VerticalAnimation key={card.title} delay={index * 0.2}>
            <DetailsCard
              desc={card.desc}
              icon={card.src}
              link={card.link}
              text={card.text}
              title={card.title}
            />
          </VerticalAnimation>
        ))}
      </div>
      <VerticalAnimation delay={0.4}>
        <DetailsForm />
      </VerticalAnimation>
    </section>
  );
}
