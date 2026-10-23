import { Leaf } from "lucide-react";

type Props = {
  carbon: number;
};

export default function SustainabilityCard({
  carbon,
}: Props) {
  return (
    <div className="rounded-[32px] border border-green-200 bg-green-50 p-8">

      <div className="flex items-center gap-3">

        <Leaf className="text-green-600" />

        <h2 className="text-2xl font-bold text-green-700">
          Sustainability
        </h2>

      </div>

      <div className="mt-8">

        <p className="text-green-700">
          Carbon Footprint
        </p>

        <h3 className="mt-3 text-5xl font-bold">
          {carbon.toFixed(2)}
        </h3>

        <p className="mt-2 text-green-700">
          kg CO₂e
        </p>

      </div>

    </div>
  );
}