import { CircleCheckBig } from "lucide-react";

export default function TimelineCard() {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Lifecycle Timeline
      </h2>

      <div className="mt-8 space-y-6">

        {[
          "Manufactured",
          "Quality Inspection",
          "Registered",
          "Active",
        ].map((step) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            <CircleCheckBig className="text-green-600" />

            <span>{step}</span>
          </div>
        ))}

      </div>

    </div>
  );
}