import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Portfolio } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from Raisevane — SaaS platforms, mobile apps, AI assistants and marketplaces we've designed, built and scaled.",
};

export default function WorkPage() {
  return (
    <main className="relative">
      <PageHeader
        tag="Our Work"
        title="Proof, not"
        titleAccent="promises."
        subtitle="A selection of products we've designed, engineered and scaled. Tap any project to see the story behind it."
      />
      <Portfolio />
    </main>
  );
}
