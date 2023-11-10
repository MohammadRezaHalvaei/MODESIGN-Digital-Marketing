import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

type PricingListProps = {
  available: boolean;
  feature: string;
  favorite: boolean;
};

export default function PricingList({
  available,
  feature,
  favorite,
}: PricingListProps) {
  return (
    <ul>
      <li className={`flex gap-2 lst ${favorite && "text-white"}`}>
        <span>
          {available ? (
            <CheckCircleFilled className="text-[#3FCD78]" />
          ) : (
            <CloseCircleFilled className="text-[#FF5353]" />
          )}
        </span>
        {feature}
      </li>
    </ul>
  );
}
