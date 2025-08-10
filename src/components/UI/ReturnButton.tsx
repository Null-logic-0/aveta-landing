"use client";
import { useRouter } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";

function ReturnButton() {
  const router = useRouter();
  return (
    <div className="  flex items-center justify-start w-full">
      <button className="cursor-pointer" onClick={() => router.push("/")}>
        <RiArrowGoBackFill className="text-xl" />
      </button>
    </div>
  );
}

export default ReturnButton;
