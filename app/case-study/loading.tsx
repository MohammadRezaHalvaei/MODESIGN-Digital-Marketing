import CaseSkleton from "@/components/CaseStudy/CaseSkleton";

export default function loading() {
  return (
    <>
      {["#E9F7FF", "#FFDBD4", "#FFF3CA"].map((color, index) => (
        <CaseSkleton bgColor={color} key={index} />
      ))}
    </>
  );
}
