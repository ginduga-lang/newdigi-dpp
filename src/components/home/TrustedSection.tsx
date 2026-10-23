import {
  ShieldCheck,
  Leaf,
  ScanSearch,
  Factory,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Protected Digital Passports with reliable cloud storage.",
  },
  {
    icon: ScanSearch,
    title: "Traceable",
    text: "Every component is uniquely identified and QR verified.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    text: "Carbon footprint and material data in one place.",
  },
  {
    icon: Factory,
    title: "Industry Ready",
    text: "Designed for manufacturers and supply chains.",
  },
];

export default function TrustedSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted Manufacturing Platform
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Built for Modern Manufacturing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            NEWDIGI helps manufacturers manage Digital Part Passports,
            sustainability information, compliance documentation,
            and lifecycle traceability from a single platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}