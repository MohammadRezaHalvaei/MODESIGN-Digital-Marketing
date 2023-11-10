import Image from "next/image";

import usa from "@/public/images/about/offices/usa.png";
import ca from "@/public/images/about/offices/canada.png";

import call from "@/public/images/about/offices/call.svg";
import mail from "@/public/images/about/offices/mail.svg";

export default function OfficesCard({
  location = "usa",
}: {
  location?: string;
}) {
  return (
    <div className="rounded-[30px] py-[50px] px-8 bg-white flex flex-col gap-5">
      <Image src={location === "usa" ? usa : ca} alt="USA" />
      <div>
        <h6 className="h6-title mb-4">San Francisco, USA</h6>
        <p className="font-notoSans text-xl leading-[31.3px] text-[#555] max-sm:text-lg">
          1650 Page. San Francisco, California(CA), 94117
        </p>
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="flex gap-2.5 items-center">
          <Image src={call} alt="Call" />
          <h6 className="subtitle text-[#555] max-sm:text-lg">
            (414) 809 - 2567
          </h6>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image src={mail} alt="Mail" />
          <h6 className="subtitle text-[#555] max-sm:text-lg">
            Contact@marketingagency.com
          </h6>
        </div>
      </div>
    </div>
  );
}
