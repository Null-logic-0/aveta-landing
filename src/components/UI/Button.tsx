import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import SpinnerMini from "./spinner-mini/SpinnerMini";

type ButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  buttonType?: "fill" | "outline";
  isPending?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  buttonType = "fill",
  isDisabled,
  isPending,
  className,
  ...rest
}: ButtonProps) {
  const buttonStyle =
    buttonType === "fill"
      ? "bg-[#8A38F5]"
      : "bg-[#1E1E25] border border-[#8A38F5]";
  return (
    <button
      disabled={isDisabled || isPending}
      className={twMerge(
        `${
          isDisabled
            ? `${buttonStyle} opacity-50 cursor-not-allowed`
            : `${buttonStyle} cursor-pointer`
        }  rounded-[6px] flex justify-center items-center gap-2 py-3 px-2 text-sm font-semibold w-full`,
        className
      )}
      {...rest}
    >
      {isPending && <SpinnerMini />}
      {children}
    </button>
  );
}

export default Button;
