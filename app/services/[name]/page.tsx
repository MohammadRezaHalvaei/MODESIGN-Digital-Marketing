import About from "@/components/Services/Single/About";
import Landing from "@/components/Services/Single/Landing";
import Services from "@/components/Services/Single/Services";

export async function generateStaticParams() {
  return [
    { name: "Content-Strategy" },
    { name: "Brand-Awareness" },
    { name: "Video-Marketing" },
    { name: "Social-Paid-Advertising" },
    { name: "Social-Audits" },
    { name: "Social-Media-Management" },
  ];
}

export default function ServicesSinglePage() {
  return (
    <main>
      <Landing />
      <Services />
      <About />
    </main>
  );
}
