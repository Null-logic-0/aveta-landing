import { twMerge } from "tailwind-merge";

type CardLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function CardLayout({ children, className }: CardLayoutProps) {
  return (
    <div
      className={twMerge(
        "bg-[#11141D] border border-[#3B3A3F] rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CardLayout;
