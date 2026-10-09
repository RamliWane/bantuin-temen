import { HistoryFacilities } from "@/components/history/HistoryFacilities";
import { HistoryHero } from "@/components/history/HistoryHero";
import { HistoryOverview } from "@/components/history/HistoryOverview";

export default function Home() {
  return (
    <main>
      <HistoryHero />
      <HistoryOverview />
      <HistoryFacilities />
    </main>
  );
}