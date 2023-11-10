import Content from "@/components/CaseStudy/Single/Content";
import Landing from "@/components/CaseStudy/Single/Landing";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Subscribe from "@/components/Utils/Subscribe";

export async function generateStaticParams() {
  return [
    { cases: "Behind-the-scenes-when-working-on" },
    { cases: "How-we-helped-YouTube-to-increase" },
    { cases: "Client-Boosts-Leads-From-Unengaged-Segment" },
  ];
}

export default function CaseStudySinglePage({
  params: { cases },
}: {
  params: { cases: string };
}) {
  return (
    <main>
      <Landing cases={cases} />
      <Content />
      <Subscribe />
      <Testimonial onHome={false} />
    </main>
  );
}
