import VerticalAnimation from "@/utils/Animations/VerticalAnimation";
import Experiences from "../Home/Case/Experiences";

const exps = [
  { num: 325, numColor: "5956E8", text: "Clients Worldwide" },
  { num: 975, numColor: "FF1850", text: "Projects Completed" },
  { num: 70, numColor: "FFDC60", text: "Team Members" },
  { num: "85m", numColor: "38E55E", text: "Revenue Generated" },
];

export default function Experience() {
  return (
    <div className="py-[100px] bg-secondary_a max-lg:py-[50px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 justify-items-center max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1">
        {exps.map((exp, index) => (
          <VerticalAnimation key={index} delay={index * 0.2}>
            <Experiences
              num={exp.num}
              numColor={exp.numColor}
              text={exp.text}
            />
          </VerticalAnimation>
        ))}
      </div>
    </div>
  );
}
