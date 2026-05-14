import { Hero } from "@/components/home/Hero";
import { CapabilitiesBento } from "@/components/home/CapabilitiesBento";
import { WordStrip } from "@/components/home/WordStrip";
import { Manifesto } from "@/components/home/Manifesto";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Faq } from "@/components/home/Faq";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesBento />
      <WordStrip />
      <Manifesto />
      <ProcessSection />
      <Faq />
      <ContactCTA />
    </>
  );
}
