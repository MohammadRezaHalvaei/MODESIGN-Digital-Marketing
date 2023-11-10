import CallToAction from "@/components/Services/CallToAction";
import Services from "@/components/Services/Services";
import LandingName from "@/components/Utils/LandingName";

export default function ServicesPage() {
  return (
    <main>
      <LandingName
        title="Services"
        bgLtoR={["#CFD4FF", "#FFFFFD"]}
        blursLtoR={["#7CFF99", "#EDFFBB", "#7DFFE8"]}
      />
      <Services />
      <CallToAction />
    </main>
  );
}
