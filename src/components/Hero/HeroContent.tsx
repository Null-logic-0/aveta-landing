"use client";
import { handleNavigate } from "@/utils/redirect-to-chat";
import Button from "../UI/Button";

function HeroContent() {
  return (
    <div className="max-w-[620px] flex flex-col items-center gap-6 p-6 max-md:p-4 max-sm:p-6 max-lg:gap-4 max-md:max-w-[320px]">
      <h1 className="font-bold text-center text-5xl max-lg:text-2xl max-md:text-lg max-sm:text-sm">
        You&apos;re not alone. Meet your{" "}
        <span className="text-[#FF4DC3]">AI</span> Companion
      </h1>
      <p className="text-center text-lg opacity-70 font-semibold  max-lg:text-sm max-sm:hidden">
        Choose who vibes with you. Get emotional support, creative inspiration,
        productivity coaching, or just pure chaotic energy.
      </p>
      <Button
        onClick={handleNavigate}
        className="w-[180px] h-[60px] text-lg max-lg:text-sm max-lg:w-[140px] max-sm:w-[120px] max-sm:h-full"
      >
        Start Chatting
      </Button>
    </div>
  );
}

export default HeroContent;
