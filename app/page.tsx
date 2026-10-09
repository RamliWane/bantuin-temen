import { HistoryFacilities } from "@/components/history/HistoryFacilities";
import { HistoryGallery } from "@/components/history/HistoryGallery";
import { HistoryHero } from "@/components/history/HistoryHero";
import { HistoryLeadership } from "@/components/history/HistoryLeadership";
import { HistoryOverview } from "@/components/history/HistoryOverview";
import { HistoryTimeline } from "@/components/history/HistoryTimeline";

export default function Home() {
  return (
    <main>
      <div id="sejarah" className="scroll-mt-16">
        <HistoryHero />
      </div>
      <div id="tentang" className="scroll-mt-16">
        <HistoryOverview />
      </div>
      <div id="fasilitas" className="scroll-mt-16">
        <HistoryFacilities />
      </div>
      <div id="perjalanan" className="scroll-mt-16">
        <HistoryTimeline />
      </div>
      <div id="galeri" className="scroll-mt-16">
        <HistoryGallery />
      </div>
      <div id="kepemimpinan" className="scroll-mt-16">
        <HistoryLeadership />
      </div>
    </main>
  );
}
