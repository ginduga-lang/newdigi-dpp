"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export default function SearchSection() {
  const router = useRouter();
  const [partNumber, setPartNumber] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!partNumber.trim()) {
      alert("Please enter a Part Number.");
      return;
    }

    router.push(`/passport/${partNumber.trim()}`);
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Passport Lookup
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Find Any Digital Part Passport
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Search by Part Number to instantly access manufacturing,
            sustainability, compliance, and lifecycle information.
          </p>

        </div>

        <div className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-5 lg:flex-row"
          >

            <div className="relative flex-1">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />

              <input
                type="text"
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}
                placeholder="Enter Part Number (e.g. ABC123)"
                className="w-full rounded-2xl border border-slate-300 py-5 pl-14 pr-5 text-lg outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Search Passport
              <ArrowRight size={20} />
            </button>

          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <span className="text-slate-500">
              Try:
            </span>

            {["ABC123", "BEARING-001", "GEAR-102", "MOTOR-205"].map(
              (example) => (
                <button
                  key={example}
                  onClick={() => router.push(`/passport/${example}`)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {example}
                </button>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}