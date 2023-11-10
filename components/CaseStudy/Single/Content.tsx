import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Content() {
  return (
    <section className="max-w-[900px] mx-auto py-[100px] px-6 max-sm:px-4 max-lg:py-12">
      <VerticalAnimation delay={0.4}>
        <h3 className="h3-title mb-2 max-sm:text-3xl">Project Overview</h3>
        <div className="flex flex-col gap-[50px] max-md:gap-7">
          <p className="parag max-sm:text-base">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
          <ul className="pl-8 flex flex-col gap-6 list-disc text-[#555] font-notoSans text-xl leading-8 max-sm:gap-3 max-sm:text-base">
            <li>
              Dolor duis lorem enim eu turpis potenti nulla semper velit sed
            </li>
            <li>
              Lorem a eget blandit ac neque amet amet non dapibus pulvinar
            </li>
            <li>
              Pellentesque non integer ac id imperdiet blandit sit bibendum
            </li>
          </ul>
          <p className="parag max-sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nunc donec
            vel sem ut ipsum odio duis vel sem et ornare consequat. Bibendum
            nibh et eget magna at habitant mauris nisi pellentesque morbi massa
            in eleifend tempus pellentesque sed pellentesque ridiculus aliquam
            maecenas turpis vulputate pellentesque maecenas egestas platea
            dictumst.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit mollis justo
            integer vitae aliquet elit velit dictum. Commodo facilisi sapien
            natoque eu elit odio est libero scelerisque urna aliquet id mauris
            suspendisse.
          </p>
          <ol
            className="pl-6 flex flex-col gap-6 max-w-[661px] list-decimal text-[#555] font-notoSans 
            text-xl leading-8 max-sm:gap-3 max-sm:text-base"
          >
            <li className="pl-2">
              the unbanked population, combat counterfeiting and improve
              cross-border.
            </li>
            <li className="pl-2">
              transactions to name a few. Even if we disregard the notion of
              bitcoin as a speculative
            </li>
            <li className="pl-2">
              Even if we disregard the notion of bitcoin as a speculative asset
              or store of value.
            </li>
          </ol>
          <p className="parag max-sm:text-base">
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
        </div>
      </VerticalAnimation>
    </section>
  );
}
