import Link from "next/link";
import { QrCode, ShieldCheck, ArrowRight } from "lucide-react";
import { Part } from "@/types/part";

type LatestPassportsProps = {
  parts: Part[];
};

export default function LatestPassports({
  parts = [],
}: LatestPassportsProps) {
  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-6xl px-6">


        {/* HEADER */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Verified Products
          </span>


          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Recent Digital Passports
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">

            Explore recently registered products
            protected by NEWDIGI Digital Passport technology.

          </p>

        </div>



        {/* EMPTY STATE */}

        {parts.length === 0 && (

          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">


            <QrCode
              className="mx-auto text-slate-400"
              size={60}
            />


            <h3 className="mt-5 text-xl font-bold text-slate-900">

              No Passports Available

            </h3>


            <p className="mt-2 text-sm text-slate-500">

              New Digital Passports will appear here after registration.

            </p>


          </div>

        )}



        {/* PASSPORT PREVIEW CARDS */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {parts.map((part) => (

            <div
              key={part.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >


              <div className="flex items-start justify-between">


                <div className="rounded-xl bg-blue-50 p-4">

                  <QrCode
                    className="text-blue-600"
                    size={42}
                  />

                </div>



                <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                  <ShieldCheck size={14} />

                  Verified

                </div>


              </div>



              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {part.part_name}

              </h3>



              <p className="mt-2 text-sm font-medium text-blue-600">

                Passport ID: {part.part_number}

              </p>



              <div className="mt-5 rounded-xl bg-slate-50 p-4">

                <p className="text-sm text-slate-500">
                  Manufacturer
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {part.manufacturer}
                </p>

              </div>



              <Link
                href={`/passport/${part.part_number}`}
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
              >

                View Full Passport

                <ArrowRight size={16} />

              </Link>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}