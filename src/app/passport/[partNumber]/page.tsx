import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PassportHero from "@/components/passport/PassportHero";
import QRCodeCard from "@/components/passport/QRCodeCard";
import InfoCard from "@/components/passport/InfoCard";
import SustainabilityCard from "@/components/passport/SustainabilityCard";
//import DocumentsCard from "@/components/passport/DocumentList";
import TimelineCard from "@/components/passport/Timeline";
import { getPartDocuments } from "@/services/documentService";
import DocumentsCard from "@/components/passport/DocumentsCard";

import { getPartByNumber } from "@/services/partService";

type Props = {
  params: Promise<{
    partNumber: string;
  }>;
};

export default async function PassportPage({
  params,
}: Props) {
  const { partNumber } = await params;

  const part = await getPartByNumber(partNumber);

  if (!part) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold">
        Passport Not Found
      </h1>

      <p className="mt-4 text-slate-600">
        No Digital Passport exists for this part number.
      </p>
    </main>
  );
}

  const documents =
  await getPartDocuments(part.id);

  if (!part) {
    return (
      <>
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 py-24">

          <div className="rounded-3xl border border-red-200 bg-red-50 p-12 text-center">

            <h1 className="text-4xl font-bold text-red-700">
              Passport Not Found
            </h1>

            <p className="mt-4 text-red-600">
              No Digital Part Passport exists for
              <strong> {partNumber}</strong>.
            </p>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        <div className="mx-auto max-w-7xl space-y-10 px-6 py-12">

          <PassportHero part={part} />

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Left */}

            <div className="space-y-8">

              <QRCodeCard value={part.part_number} />

              <SustainabilityCard
                carbon={part.carbon}
              />

            </div>

            {/* Right */}

            <div className="space-y-8 lg:col-span-2">

              <div className="grid gap-6 md:grid-cols-2">

                <InfoCard
                  label="Manufacturer"
                  value={part.manufacturer}
                />

                <InfoCard
                  label="Material"
                  value={part.material}
                />

                <InfoCard
                  label="Weight"
                  value={`${part.weight} kg`}
                />

                <InfoCard
                  label="Status"
                  value={part.status}
                />

              </div>

              <DocumentsCard
  documents={documents}
/>

              <TimelineCard />

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}