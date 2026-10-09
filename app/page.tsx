import { HistoryFacilities } from "@/components/history/HistoryFacilities";
import { HistoryHero } from "@/components/history/HistoryHero";
import { HistoryOverview } from "@/components/history/HistoryOverview";
import { HistoryTimeline } from "@/components/history/HistoryTimeline";

export default function Home() {
  return (
    <main>
      <HistoryHero />
      <HistoryOverview />
      <HistoryFacilities />
      <HistoryTimeline />
    </main>
  );
}