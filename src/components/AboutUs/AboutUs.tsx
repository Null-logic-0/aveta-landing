import Image from "next/image";
import Heading from "../UI/Heading";
import Paragraph from "../UI/Paragraph";
import SubHeading from "../UI/SubHeading";
import MissionVisionCards from "./MissionVisionCards";
import SectionImage from "../../../public/image2.png";

function AboutUs() {
  return (
    <section
      id="#about-us"
      className="flex items-start justify-between max-lg:flex-wrap max-lg:gap-6 max-lg:justify-center"
    >
      <div className="flex flex-col gap-4 max-w-[600px] max-lg:items-center">
        <SubHeading text="About Us" />
        <Heading text="Who We Are: Crafting AI That Cares" />
        <Paragraph
          text="At Aveta, we believe meaningful connection transcends boundaries — even between humans and machines. Our platform empowers you to create and chat with personalized AI characters tailored to your unique vibe and needs. Whether you seek emotional support, creative inspiration, or just a fun conversation partner, Aveta’s AI companions are designed to be your versatile digital friends.

Built on cutting-edge AI technology, Aveta brings your imagination to life by letting you choose, customize, and interact with AI personas that resonate with your personality and mood. We aim to create a safe, engaging, and supportive environment where technology enhances your emotional well-being and creativity.

Join Aveta today and meet your AI companion — because everyone deserves a friend who’s always there to listen, inspire, and uplift."
        />
        <MissionVisionCards />
      </div>
      <Image src={SectionImage} alt="section-image" loading="lazy" />
    </section>
  );
}

export default AboutUs;
