import ReturnButton from "@/components/UI/ReturnButton";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 max-w-[1200px] flex flex-col gap-6 w-full mx-auto">
      <ReturnButton />
      {children}
    </div>
  );
}

export default layout;
