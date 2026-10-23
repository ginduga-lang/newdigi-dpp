import {
  Package,
  Leaf,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Complete Traceability",
    description:
      "Track every manufactured component from production to recycling using a unique Digital Part Passport.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Leaf,
    title: "Sustainability Insights",
    description:
      "Monitor carbon footprint, material composition, recycling data, and environmental impact in one place.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    description:
      "Manage certificates, technical documentation, and regulatory compliance with secure cloud storage.",
    color: "from-violet-500 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Platform Features
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Everything Needed for
            <br />
            Digital Part Passports
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            NEWDIGI provides manufacturers with powerful tools for
            traceability, sustainability reporting, and regulatory
            compliance throughout the product lifecycle.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {feature.description}
                </p>

                <button className="mt-10 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4">
                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}