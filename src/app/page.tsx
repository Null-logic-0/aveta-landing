import CTA from "@/components/CTA";
import HeaderNavMenu from "@/components/HeaderNavMenu/HeaderNavMenu";
import Hero from "@/components/Hero/Hero";

function HomePage() {
  return (
    <div className="backgroundImage">
      <HeaderNavMenu />
      <Hero />
      <div className="p-6">
        <CTA />
      </div>
    </div>
  );
}

export default HomePage;
