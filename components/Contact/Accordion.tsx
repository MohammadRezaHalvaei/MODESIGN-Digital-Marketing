"use client";

import { useState } from "react";
import AccordionTab from "./AccordionTab";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const accordions = [
  {
    title: "Can I cancel or change my order?",
  },
  {
    title: "What’s your support line to call?",
  },
  {
    title: "I have a promotional or discount code?",
  },
  {
    title: "Can I integrate my store with Facebook?",
  },
  {
    title: "Where is my order? Quisque molestie",
  },
];

export default function Accodrion() {
  const [openStates, setOpenStates] = useState(
    Array(accordions.length).fill(false)
  );

  const handleTabClick = (tabIndex: number) => {
    const newOpenStates = openStates.map((state, index) =>
      index === tabIndex ? !state : state
    );
    setOpenStates(newOpenStates);
  };

  return (
    <article className="grid grid-cols-1 gap-5 items-center">
      <div className="flex flex-col gap-6 max-sm:gap-4">
        {accordions.map((accordion, index) => (
          <VerticalAnimation key={index} delay={index * 0.15}>
            <AccordionTab
              open={openStates[index]}
              setOpen={() => handleTabClick(index)}
              title={accordion.title}
            />
          </VerticalAnimation>
        ))}
      </div>
    </article>
  );
}
