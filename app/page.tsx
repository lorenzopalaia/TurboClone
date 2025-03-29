import Hero from "@/components/sections/hero";
import Installation from "@/components/sections/installation";
import Items from "@/components/sections/items";
import SocialProof from "@/components/sections/social-proof";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Items />
      <Installation />
      <SocialProof />
      <CTA />
    </>
  );
}
