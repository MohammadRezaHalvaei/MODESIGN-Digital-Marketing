import Tag from "@/components/Utils/Tag";
import Image from "next/image";
import TeamCard from "./TeamCard";

import icon from "@/public/images/about/team/Icon.png";
import pippa from "@/public/images/about/team/Pippa.png";
import richard from "@/public/images/about/team/Richard.png";
import sarah from "@/public/images/about/team/Sarah.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const teams = [
  { src: pippa, name: "Pippa Clarkson", role: "Lead Manager", hasInsta: false },
  { src: richard, name: "Richard Walsh", role: "Co-Founder", hasInsta: true },
  { src: sarah, name: "Sarah Joe", role: "Creative Director", hasInsta: true },
];

export default function Team() {
  return (
    <section className="max-w-[1200px] py-[150px] mx-auto px-6 max-lg:py-20">
      <VerticalAnimation
        delay={0.2}
        className="text-center flex flex-col items-center mb-[60px]"
      >
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag
          title="03. our team"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-3xl">
          Our team of expert marketers
        </h3>
      </VerticalAnimation>
      <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {teams.map((team, index) => (
          <VerticalAnimation delay={index * 0.3} key={team.name}>
            <TeamCard
              name={team.name}
              role={team.role}
              src={team.src}
              hasInsta={team.hasInsta}
            />
          </VerticalAnimation>
        ))}
      </div>
    </section>
  );
}
