"use client";

import Image from "next/image";
import Button from "./UI/Button";
import Heading from "./UI/Heading";
import Paragraph from "./UI/Paragraph";
import SubHeading from "./UI/SubHeading";
import SectionImage from "../../public/image1.png";
import { handleNavigate } from "@/utils/redirect-to-chat";

function HowItWorks() {
  return (
    <section
      className="flex justify-between max-lg:flex-col gap-6 items-center max-lg:justify-center"
      id="how-it-works"
    >
      <Image src={SectionImage} loading="lazy" alt="image" />
      <div className="flex flex-col gap-4 ">
        <div className="max-lg:items-center flex flex-col">
          <SubHeading text="How Does It Works?" />
          <Heading text="Chat with your desire AI character." />
          <Paragraph
            className=" max-lg:max-w-[500px]"
            text="This concise version provides a quick overview of the process, making it easy for users to understand how to get started with Aveta’s AI tools."
          />
        </div>
        <ul className="flex list-disc pl-5 flex-col gap-2 pt-4">
          <li className="text-sm">Quick registration.</li>
          <li className="text-sm">Versatile tools.</li>
          <li className="text-sm">Simple inputs.</li>
          <li className="text-sm">Instant outputs.</li>
        </ul>
        <Button
          onClick={handleNavigate}
          className="w-[20%] max-lg:w-[50%] h-[60px]"
        >
          Start Chatting
        </Button>
      </div>
    </section>
  );
}

export default HowItWorks;
