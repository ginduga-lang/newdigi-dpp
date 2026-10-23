import {
  Package,
  Factory,
  Leaf,
  CircleCheckBig,
} from "lucide-react";

type Props = {
  totalParts: number;
  manufacturers: number;
  averageCarbon: number;
  activeParts: number;
};

export default function DashboardStats({
  totalParts,
  manufacturers,
  averageCarbon,
  activeParts,
}: Props) {
  const cards = [
    {
      title: "Total Parts",
      value: totalParts,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Manufacturers",
      value: manufacturers,
      icon: Factory,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Average Carbon",
      value: `${averageCarbon.toFixed(2)} kg`,
      icon: Leaf,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Active Parts",
      value: activeParts,
      icon: CircleCheckBig,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
            >
              <Icon size={28} />
            </div>

            <h3 className="mt-6 text-4xl font-bold">
              {card.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {card.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}