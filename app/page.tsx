import { HistoryFacilities } from "@/components/history/HistoryFacilities";
import { HistoryGallery } from "@/components/history/HistoryGallery";
import { HistoryHero } from "@/components/history/HistoryHero";
import { HistoryLeadership } from "@/components/history/HistoryLeadership";
import { HistoryOverview } from "@/components/history/HistoryOverview";
import { HistoryTimeline } from "@/components/history/HistoryTimeline";

export default function Home() {
  return (
    <main>
      <HistoryHero />
      <HistoryOverview />
      <HistoryFacilities />
      <HistoryTimeline />
      <HistoryGallery />
      <HistoryLeadership />
    </main>
  );
}