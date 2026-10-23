import Navbar from "@/components/layout/Navbar";
import SearchSection from "@/components/home/SearchSection";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import LatestPassports from "@/components/home/LatestPassports";
import Footer from "@/components/layout/Footer";

import { getLatestParts } from "@/services/partService";
import { getPlatformStats } from "@/services/statsService";


export default async function PassportsPage() {

  const latestParts = await getLatestParts(6);
  const stats = await getPlatformStats();


  return (
    <>
      <Navbar />

      <SearchSection />

      <Features />

      <Stats
        totalParts={stats.totalParts}
        manufacturers={stats.manufacturers}
        averageCarbon={stats.averageCarbon}
        activeParts={stats.activeParts}
      />

      <LatestPassports parts={latestParts} />

      <Footer />
    </>
  );
}