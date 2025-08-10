import { twMerge } from "tailwind-merge";

type ParagraphProps = {
  text: string;
  className?: string;
};

function Paragraph({ text, className }: ParagraphProps) {
  return (
    <p
      className={twMerge(
        "text-xl opacity-70 font-medium  max-lg:text-lg max-sm:text-sm",
        className
      )}
    >
      {text}
    </p>
  );
}

export default Paragraph;
