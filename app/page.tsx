import About from "@/components/Home/About/About";
import Articles from "@/components/Home/Articles/Articles";
import Benefits from "@/components/Home/Benefits";
import CaseStudy from "@/components/Home/Case/CaseStudy";
import HomeLanding from "@/components/Home/HomeLanding";
import Pricing from "@/components/Home/Pricing/Pricing";
import Proccess from "@/components/Home/Proccess";
import Services from "@/components/Home/Services/Services";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <HomeLanding />
      <Services />
      <About />
      <Proccess />
      <Testimonial />
      <CaseStudy />
      <Pricing />
      <Benefits />
      <Articles />
    </main>
  );
}
