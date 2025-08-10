import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import FaqAccordion from "./FaqAccordion";

function FAQs() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full">
      <SubHeading text="FAQs" />
      <Heading text="Everything You Need to Know." />
      <div className="flex flex-col gap-6 w-full pt-6">
        <FaqAccordion
          heading="How do I create my first AI character on Aveta?"
          content="To create your first AI character, simply sign up or log in to your Aveta account, then navigate to the 'Create Character' button. You can customize traits like name, appearance, and personality. Once you're done, hit 'Create,' and your AI character will be ready to chat!"
        />
        <FaqAccordion
          heading="Can I customize the personality and appearance of the AI characters?"
          content="Yes! Aveta allows you to personalize your characters’ personalities, backgrounds, and looks to make them truly unique. You can tweak traits, choose different styles, and even set conversation behaviors to fit your needs."
        />
        <FaqAccordion
          heading="Is there a way to save and revisit past chats with my AI characters?"
          content="Absolutely! Aveta automatically saves your chat history for each character. You can access previous conversations anytime, pick up where you left off, or review important interactions whenever you want."
        />
      </div>
    </section>
  );
}

export default FAQs;
