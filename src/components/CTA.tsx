"use client";
import { handleNavigate } from "@/utils/redirect-to-chat";
import Button from "./UI/Button";
import CardLayout from "./UI/CardLayout";
import Heading from "./UI/Heading";
import Paragraph from "./UI/Paragraph";

function CTA() {
  return (
    <section className="max-w-[1200px] mt-[64px] w-full mx-auto">
      <CardLayout className="p-6 flex justify-center items-center gap-4 flex-col">
        <Heading text="Read To Build Your AI Empire?" />
        <Paragraph text="Join thousands of creators building the future of conversational AI" />
        <Button
          onClick={handleNavigate}
          className="w-[180px] h-[60px] text-lg max-lg:text-sm max-lg:w-[140px] max-sm:w-full max-sm:h-full"
        >
          Create Character
        </Button>
      </CardLayout>
    </section>
  );
}

export default CTA;
