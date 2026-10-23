import { ArrowRight, QrCode, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-3xl" />


      <div className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">


        {/* LEFT CONTENT */}

        <div>

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Industry 4.0 Ready
          </span>


          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900">

            Build the Future of

            <span className="block text-blue-600">
              Digital Part Passports
            </span>

          </h1>


          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">

            Securely track every manufactured component with complete
            traceability, sustainability insights, compliance documents,
            and QR-powered verification.

          </p>


          <div className="mt-8 flex flex-wrap gap-4">


<Link
  href="/passport"
  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
>
  Get Started

  <ArrowRight size={18} />

</Link>


<Link
  href="/verify"
  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
>
  Scan QR Code

</Link>


          </div>


          {/* TRUST ITEMS */}

          <div className="mt-10 flex flex-wrap gap-6">


            <div className="flex items-center gap-2">

              <ShieldCheck className="text-green-600" size={22} />

              <span className="text-sm text-slate-700">
                Secure Platform
              </span>

            </div>


            <div className="flex items-center gap-2">

              <Leaf className="text-green-600" size={22} />

              <span className="text-sm text-slate-700">
                Sustainability
              </span>

            </div>


            <div className="flex items-center gap-2">

              <QrCode className="text-blue-600" size={22} />

              <span className="text-sm text-slate-700">
                QR Verification
              </span>

            </div>


          </div>

        </div>



        {/* RIGHT VERIFICATION CARD */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">


          <div className="flex items-center justify-between">

            <h3 className="text-xl font-bold text-slate-900">
              Digital Passport Verification
            </h3>


            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              ACTIVE
            </span>


          </div>



          <div className="mt-8 flex justify-center">


            <div className="rounded-3xl bg-blue-50 p-8">

              <QrCode
                size={120}
                className="text-blue-600"
              />

            </div>


          </div>



          <div className="mt-8 text-center">


            <h4 className="text-lg font-bold text-slate-900">

              Scan. Verify. Trust.

            </h4>


            <p className="mt-3 text-sm leading-6 text-slate-600">

              Access complete product information,
              lifecycle data, certificates, and sustainability records
              through a secure Digital Part Passport.

            </p>


          </div>



          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">

            <p className="text-sm text-slate-500">
              Example Passport ID
            </p>

            <p className="mt-1 font-bold text-blue-600">
              ABC123
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}