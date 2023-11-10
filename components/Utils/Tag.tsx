type TagProps = {
  title: string;
  className?: string;
  slashColor?: string;
};

export default function Tag({ title, className, slashColor }: TagProps) {
  return (
    <p
      className={`font-notoSans gap-0.5 font-medium text-[15px] leading-[23.48px] 
      tracking-widest flex items-center ${className}`}
    >
      <span
        className={`text-primary_a text-lg leading-[28.17px] ${slashColor}`}
      >
        &#8725;&#8725;
      </span>
      {title.toUpperCase()}
    </p>
  );
}
