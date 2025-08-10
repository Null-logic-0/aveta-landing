"use client";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import PricePlan from "./PricePlan";
import PricePlanListItem from "./PricePlanListItem";
import { handleNavigate } from "@/utils/redirect-to-chat";

function Pricing() {
  return (
    <section
      id="pricing"
      className="flex flex-col justify-center gap-6  items-center"
    >
      <SubHeading text="Pricing" />
      <Heading text="Unlock the Full AI Experience" />
      <div className="flex  justify-center items-center gap-6 flex-wrap">
        <PricePlan
          title="Free Plan"
          price="Free"
          buttonText="Free"
          onClick={() => {}}
          isFree
        >
          <PricePlanListItem listName={"Access to all available characters"} />
          <PricePlanListItem listName={"Unlimited character creation"} />
          <PricePlanListItem listName={"30 messages per day"} />
          <PricePlanListItem listName={"No credit card required"} />
        </PricePlan>
        <PricePlan
          title="Basic Plan"
          price="$4.99/Month"
          buttonText="Subscribe"
          onClick={handleNavigate}
        >
          <PricePlanListItem listName={"Access to all available characters"} />
          <PricePlanListItem listName={"Unlimited character creation"} />
          <PricePlanListItem listName={"100 messages per day"} />
          <PricePlanListItem listName={"Personalized conversations"} />
        </PricePlan>
        <PricePlan
          title="Premium Plan"
          price="$9.99/Month"
          buttonText="Subscribe"
          onClick={handleNavigate}
        >
          <PricePlanListItem listName={"Access to all available characters"} />
          <PricePlanListItem listName={"Unlimited character creation"} />
          <PricePlanListItem listName={"200 messages per day"} />
          <PricePlanListItem listName={"Early access to new features "} />
        </PricePlan>
      </div>
    </section>
  );
}

export default Pricing;
