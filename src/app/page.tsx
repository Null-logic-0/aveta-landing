import { Suspense } from "react";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs/FAQs";
import Hero from "@/components/Hero/Hero";
import Blogs from "@/components/Blogs/Blogs";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs/AboutUs";
import Spinner from "@/components/UI/Spinner/Spinner";
import Pricing from "@/components/PricePlan/Pricing";
import Testimonials from "@/components/Testimonials";
import HeaderNavMenu from "@/components/HeaderNavMenu/HeaderNavMenu";
import Footer from "@/components/Footer";

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
        <Testimonials />
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Spinner />
            </div>
          }
        >
          <Blogs subHeading="Blogs" heading="New & Updates" />
        </Suspense>

        <FAQs />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
