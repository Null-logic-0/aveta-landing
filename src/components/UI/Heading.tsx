import { twMerge } from "tailwind-merge";

type HeadingProps = {
  text: string;
  className?: string;
};

function Heading({ text, className }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        "font-bold text-5xl max-lg:text-2xl max-md:text-lg max-sm:text-sm",
        className
      )}
    >
      {text}
    </h1>
  );
}

export default Heading;
