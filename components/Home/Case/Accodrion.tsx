"use client";

import { useState } from "react";
import AccordionTab from "./AccordionTab";
import Image from "next/image";

import online from "@/public/images/home/case/online.jpg";
import experiential from "@/public/images/home/case/experiental.jpg";
import email from "@/public/images/home/case/email.jpg";

const accordions = [
  {
    title: "Online Media Management",
    text: "Get things right at the beginning, from an SEO perspective, and you’ll save yourself hours and hours of work further down the line fixing a website.",
  },
  {
    title: "Experiential Marketing",
    text: "It can be difficult to know when SEO changes will translate into benefits, especially due to impediments such as websites that have been penalized.",
  },
  {
    title: "Email Marketing ",
    text: "Many of the SEO companies that do still guarantee rankings have taken the clever tack of guaranteeing a certain number of keywords.",
  },
];

const image = [online, experiential, email];

export default function Accodrion() {
  const [openStates, setOpenStates] = useState([false, true, false]);

  const stateIndex = openStates.findIndex((open) => open === true);

  const handleTabClick = (tabIndex: number) => {
    const newOpenStates = openStates.map((_, index) => index === tabIndex);
    setOpenStates(newOpenStates);
  };

  return (
    <article className="grid grid-cols-[1fr_1.1fr] gap-6 items-center max-xl:grid-cols-1">
      <div className="flex flex-col gap-6">
        {openStates.map((isOpen, index) => (
          <AccordionTab
            key={index}
            open={isOpen}
            setOpen={() => handleTabClick(index)}
            title={accordions.at(index)!.title}
            text={accordions.at(index)!.text}
          />
        ))}
      </div>
      <div
        className="w-full bg-gradient-to-br to-[#FFDA57] from-[#5956E8] h-[95%] rounded-[10px]
        flex items-center justify-center max-xl:h-full max-xl:py-10 max-sm:py-6 max-sm:px-6"
      >
        <Image
          src={image[stateIndex]}
          alt={accordions.at(stateIndex)!.title}
          className="rounded-[10px] w-[435px]"
        />
      </div>
    </article>
  );
}
