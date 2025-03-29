import Hero from "@/components/sections/hero";
import Installation from "@/components/sections/installation";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Installation />
      <Testimonials />
      <CTA />
    </>
  );
}
