import CTA from "@/components/CTA";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs/AboutUs";
import Pricing from "@/components/PricePlan/Pricing";
import HeaderNavMenu from "@/components/HeaderNavMenu/HeaderNavMenu";

function HomePage() {
  return (
    <div className="backgroundImage">
      <HeaderNavMenu />
      <Hero />
      <div className="p-6 max-w-[1200px] mt-[64px] flex flex-col gap-[120px] w-full mx-auto">
        <CTA />
        <HowItWorks />
        <AboutUs />
        <Pricing />
      </div>
    </div>
  );
}

export default HomePage;
