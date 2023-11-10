type ExperienceProps = {
  num: number | string;
  numColor: string;
  text: string;
};

export default function Experience({ num, numColor, text }: ExperienceProps) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="h3-title text-white">
        {num}
        <span style={{ color: `#${numColor}` }}>+</span>
      </h3>
      <p className="font-notoSans text-[15px] leading-[23.48px] tracking-widest text-[#D0D0D0]">
        {text.toUpperCase().split(" ")[0]}
        <br /> {text.toUpperCase().split(" ")[1]}
      </p>
    </div>
  );
}
