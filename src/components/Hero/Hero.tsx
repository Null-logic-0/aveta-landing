import Image from "next/image";
import HeroIntroSection from "./HeroIntroSection";
import bgImage from "../../../public/bg.jpg";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <>
      <HeroIntroSection />
      <div
        id="#home"
        className="px-6 pb-6 pt-16 relative flex items-center overflow-hidden justify-center flex-col lg:hidden"
      >
        <Image
          src={bgImage}
          alt="bg-image"
          className="rounded-2xl  border-1 border-gray-400/50"
        />
        <div className="absolute bg-black/40  w-full h-full  flex justify-center items-center">
          <HeroContent />
        </div>
      </div>
    </>
  );
}

export default Hero;
