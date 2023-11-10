import Image from "next/image";
import Tag from "../../Utils/Tag";
import PricingCard from "./PricingCard";

import icon from "@/public/images/home/pricing/Icon.png";
import starter from "@/public/images/home/pricing/starter.png";
import enterprice from "@/public/images/home/pricing/enterprice.png";
import pro from "@/public/images/home/pricing/pro.png";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

const features = [
  "Email Marketing Content",
  "Marketing Voice",
  "Optimize SEO",
  "Consulting Video",
  "MarketingAdvertising",
];

const cards = [
  {
    available: [true, true, true, false, false],
    features,
    plan: "Starter",
    price: 29,
    icon: starter,
  },
  {
    available: [true, true, true, true, false],
    features,
    plan: "Enterprice",
    price: 49,
    icon: enterprice,
    favorite: true,
  },
  {
    available: [true, true, true, true, true],
    features,
    plan: "Professional",
    price: 99,
    icon: pro,
  },
];

export default function Pricing() {
  return (
    <section className="max-w-[1200px] mx-auto py-[180px] px-6 max-sm:px-4 max-lg:py-[70px]">
      <VerticalAnimation className="text-center flex flex-col items-center mb-10">
        <Image src={icon} alt="Proccess" className="mb-[34px]" />
        <Tag
          title="06. price & plan"
          slashColor="text-primary_b"
          className="mb-3.5"
        />
        <h3 className="h3-title max-sm:text-2xl">Our Flexible Pricing Plans</h3>
      </VerticalAnimation>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {cards.map((card, index) => (
          <VerticalAnimation key={card.plan} delay={index * 0.4}>
            <PricingCard
              available={card.available}
              icon={card.icon}
              plan={card.plan}
              price={card.price}
              features={card.features}
              favorite={card.favorite}
            />
          </VerticalAnimation>
        ))}
      </div>
    </section>
  );
}
