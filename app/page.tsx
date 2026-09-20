import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Process } from "@/components/Process";
import { VisionMission } from "@/components/VisionMission";
import { Faq } from "@/components/Faq";
import { Pricing } from "@/components/Pricing";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <OurStory />
      <Process />
      <VisionMission />
      <Faq />
      <Pricing />
      <Location />
      <Contact />
    </main>
  );
}
