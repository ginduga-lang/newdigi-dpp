import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-4xl font-bold text-slate-900">
          About NEWDIGI
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

          NEWDIGI is a Digital Product Passport platform designed
          to help manufacturers create transparent, traceable,
          and sustainable product identities.

        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border p-6">
            <h2 className="font-bold">
              Traceability
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Track products throughout their lifecycle.
            </p>
          </div>


          <div className="rounded-2xl border p-6">
            <h2 className="font-bold">
              Sustainability
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Monitor carbon and environmental data.
            </p>
          </div>


          <div className="rounded-2xl border p-6">
            <h2 className="font-bold">
              Verification
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Verify products using QR technology.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}