import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TeamGrid, TEAM } from "@/components/ManagementTeam";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Raisevane — enterprise-grade engineers, security specialists and AI builders, plus 10+ senior specialists behind every build.",
};

export default function TeamPage() {
  return (
    <main className="relative">
      <PageHeader
        tag="Management Team"
        title="The people behind"
        titleAccent="Raisevane"
        subtitle="Enterprise-grade engineers, security specialists and AI builders — meet the minds building your product."
      />
      <TeamGrid members={TEAM} />
    </main>
  );
}
