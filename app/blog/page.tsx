import Articles from "@/components/Blog/Articles";
import Posts from "@/components/Blog/Posts";
import LandingName from "@/components/Utils/LandingName";
import Subscribe from "@/components/Utils/Subscribe";

export default function BlogPage() {
  return (
    <>
      <LandingName
        title={["Our", "Blog"]}
        bgLtoR={["#F5E9FF", "#FFDBD4"]}
        blursLtoR={["#DDFF7C", "#FFC4BB", "#FA95D1"]}
      />
      <Articles />
      <Subscribe />
      <Posts />
    </>
  );
}
