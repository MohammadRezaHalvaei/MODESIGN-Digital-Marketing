import About from "@/components/About/About";
import Experience from "@/components/About/Experience";
import Offices from "@/components/About/Offices/Offices";
import Team from "@/components/About/Team/Team";
import Values from "@/components/About/Values/Values";
import LandingName from "@/components/Utils/LandingName";

export default function AboutPage() {
  return (
    <>
      <LandingName
        title={["About", "Us"]}
        bgLtoR={["#F9F6DA", "#E2D4FF"]}
        blursLtoR={["#E326AE", "#FFC4BB", "#FFFA76"]}
      />
      <Experience />
      <About />
      <Values />
      <Team />
      <Offices />
    </>
  );
}
