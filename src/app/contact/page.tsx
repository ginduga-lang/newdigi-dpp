import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-4xl font-bold text-slate-900">
          Contact NEWDIGI
        </h1>


        <p className="mt-6 text-lg text-slate-600">
          Get in touch with our team for Digital Product Passport solutions.
        </p>


        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">

          <p>
            Email: support@newdigi.com
          </p>

          <p className="mt-3">
            We help manufacturers build secure and transparent product
            information systems.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}