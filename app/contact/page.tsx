import Details from "@/components/Contact/Details";
import Faq from "@/components/Contact/Faq";
import LandingName from "@/components/Utils/LandingName";
import Subscribe from "@/components/Utils/Subscribe";

export default function page() {
  return (
    <>
      <LandingName
        title={"Let's Talk"}
        bgLtoR={["#F5E9FF", "#FFDBD4"]}
        blursLtoR={["#DDFF7C", "#FFC4BB", "#FA95D1"]}
      />
      <Details />
      <Subscribe />
      <Faq />
    </>
  );
}
