"use client";
import Button from "./UI/Button";
import Heading from "./UI/Heading";
import Paragraph from "./UI/Paragraph";
import CardLayout from "./UI/CardLayout";
import { handleNavigate } from "@/utils/redirect-to-chat";

function CTA() {
  return (
    <section>
      <CardLayout className="p-6 flex justify-center items-center gap-4 flex-col">
        <Heading text="Read To Build Your AI Empire?" className="text-center" />
        <Paragraph
          text="Join thousands of creators building the future of conversational AI"
          className="text-center"
        />
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
