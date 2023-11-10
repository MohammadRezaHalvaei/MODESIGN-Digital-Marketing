import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Subscribe() {
  return (
    <section
      className="bg-secondary_a w-full relative h-[535px] max-sm:h-[400px]
      bg-[url('/images/utils/Subscribe/pattern.png')] bg-cover bg-no-repeat bg-center"
    >
      <VerticalAnimation
        delay={0.2}
        className="flex h-full items-center justify-center px-4"
      >
        <div>
          <h2 className="h2-title text-white mb-[50px] max-sm:text-4xl max-[494px]:text-[26px]">
            Subscribe to our <span className="text-primary_a">newsletter</span>
          </h2>
          <div className="flex gap-5 items-center max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="py-4 pl-6 w-full border border-transparent placeholder:menu menu placeholder:text-white focus:outline-0
            bg-[#5B5B61] rounded-[10px] hover:placeholder:text-white text-white hover:text-white"
            />
            <button className="btn-gold-large py-4 px-8 h-fit max-sm:w-full">
              Subscribe
            </button>
          </div>
        </div>
      </VerticalAnimation>
    </section>
  );
}
