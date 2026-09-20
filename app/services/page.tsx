import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCardStack } from "@/components/ServiceCardStack";
import { ServicesList } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Web, mobile, AI, design, cloud and QA — everything Raisevane does, end to end.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <PageHeader
        tag="Our Services"
        title="What we do,"
        titleAccent="end to end"
        subtitle="One team for strategy, design, engineering and everything after launch."
      />
      <ServiceCardStack />
      <ServicesList />
      <TechStack />
    </main>
  );
}
