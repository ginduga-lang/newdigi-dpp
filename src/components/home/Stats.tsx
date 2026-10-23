import {
  Package,
  Factory,
  Leaf,
  CircleCheckBig,
} from "lucide-react";

type StatsProps = {
  totalParts: number;
  manufacturers: number;
  averageCarbon: number;
  activeParts: number;
};

export default function Stats({
  totalParts,
  manufacturers,
  averageCarbon,
  activeParts,
}: StatsProps) {
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
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Live Analytics
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Platform Statistics
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Real-time insights from your Digital Part Passport platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-4xl font-bold text-slate-900">
                  {card.value}
                </h3>

                <p className="mt-3 text-lg text-slate-600">
                  {card.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}