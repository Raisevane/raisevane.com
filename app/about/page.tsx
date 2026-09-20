import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VisionMission } from "@/components/VisionMission";
import { OurStory } from "@/components/OurStory";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Raisevane's story, vision, mission and values — who we are and why we build.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <PageHeader
        tag="About Us"
        title="Built by builders,"
        titleAccent="for builders."
        subtitle="The story, vision and values behind Raisevane — a studio obsessed with shipping software that feels effortless."
      />
      <VisionMission showTag={false} />
      <OurStory showTag={false} visual="ecosystem" />
    </main>
  );
}
