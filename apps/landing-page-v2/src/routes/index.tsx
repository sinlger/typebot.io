import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/features/homepage/Hero";
import { Features } from "@/features/homepage/Features";
import HowItWorks from "@/features/homepage/HowItWorks";
import GetStartedFlow from "@/features/homepage/GetStartedFlow";
import RoiCalculator from "@/features/homepage/RoiCalculator";
import { DemoSandbox } from "@/features/homepage/DemoSandbox";
import { Pricing } from "@/features/homepage/Pricing";
import { Faq } from "@/features/homepage/Faq";
import { Testimonials } from "@/features/homepage/Testimonials";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <GetStartedFlow />
      <RoiCalculator />
      <DemoSandbox />
      <Pricing />
      <Faq />
      <Testimonials />
    </>
  );
}
