import CaseStudies from "@/components/CaseStudy/CaseStudies";
import LandingName from "@/components/Utils/LandingName";

export default function CaseStudyPage() {
  return (
    <>
      <LandingName
        title="Case Study"
        bgLtoR={["#F5E9FF", "#FFDBD4"]}
        blursLtoR={["#DDFF7C", "#FFC4BB", "#FA95D1"]}
      />
      <CaseStudies />
    </>
  );
}
