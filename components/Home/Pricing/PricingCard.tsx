import Image, { StaticImageData } from "next/image";
import PricingList from "./PricingList";

type PricingCardProps = {
  plan: string;
  price: number;
  icon: StaticImageData;
  favorite?: boolean;
  available: boolean[];
  features: string[];
};

export default function PricingCard({
  plan,
  price,
  icon,
  favorite = false,
  available,
  features,
}: PricingCardProps) {
  return (
    <div
      className={`border  rounded-[10px] ${
        favorite
          ? "border-transparent bg-secondary_a relative"
          : "border-[#E2E2E2]"
      }`}
    >
      <div className="py-11 px-9">
        <div className="grid grid-cols-[0.2fr_1fr] items-center gap-8 border-b border-[#D3D3D3] pb-[30px] mb-[30px]">
          <Image src={icon} alt={plan} />
          <div>
            <h6
              className={`h6-title font-bold mb-2 ${favorite && "text-white"}`}
            >
              {plan}
            </h6>
            <p
              className={`font-notoSans text-lg leading-[43.92px] text-[#555] font-normal ${
                favorite && "text-white"
              }`}
            >
              <span
                className={`font-nunito font-black text-secondary_a leading-[55.25px] text-[50px] max-xl:text-4xl ${
                  favorite && "text-white max-xl:text-4xl"
                }`}
              >
                ${price}
              </span>{" "}
              /Per Month
            </p>
          </div>
        </div>
        {available.map((item, index) => (
          <PricingList
            key={index}
            available={item}
            feature={features[index]}
            favorite={favorite}
          />
        ))}
        <button
          className={`${
            favorite
              ? "btn-white bg-white hover:bg-primary_a hover:text-secondary_a"
              : "btn-black"
          } mt-[30px] w-full`}
        >
          Purchase Plan
        </button>
      </div>
      {favorite && (
        <p
          className="font-notoSans text-lg leading-[36.6px] font-medium max-xl:text-base
          text-secondary_a bg-primary_a px-3 py-1 rounded-lg w-fit absolute top-3 right-3"
        >
          POPULAR
        </p>
      )}
    </div>
  );
}
