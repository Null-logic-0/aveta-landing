import CardLayout from "../UI/CardLayout";
import { PiTargetBold } from "react-icons/pi";
import { PiEyesFill } from "react-icons/pi";

function MissionVisionCards() {
  return (
    <div className="flex items-center gap-4 pt-6 max-md:flex-wrap max-lg:justify-center">
      <CardLayout className="p-4 flex flex-col gap-2 max-w-[330px]">
        <div className="bg-[#28272A] w-10 h-10 flex justify-center items-center rounded-full p-2">
          <PiTargetBold className="text-xl text-[#FF4DC3]" />
        </div>

        <h3 className="text-xl font-bold">Our Mission</h3>
        <p className="text-sm opacity-50 font-medium">
          To create deeply personalized AI companions that empower users to find
          emotional support, creative inspiration, and authentic connection
          anytime, anywhere.
        </p>
      </CardLayout>
      <CardLayout className="p-4 flex flex-col gap-2 max-w-[330px]">
        <div className="bg-[#28272A] w-10 h-10 flex justify-center items-center rounded-full p-2">
          <PiEyesFill className="text-xl text-[#FF4DC3]" />
        </div>

        <h3 className="text-xl font-bold">Our Vision</h3>
        <p className="text-sm opacity-50 font-medium">
          To revolutionize human-AI interaction by building a world where AI
          companions seamlessly enhance well-being, creativity, and everyday
          life — making meaningful connections accessible to all.
        </p>
      </CardLayout>
    </div>
  );
}

export default MissionVisionCards;
