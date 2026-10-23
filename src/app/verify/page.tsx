import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { QrCode } from "lucide-react";


export default function VerifyPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20 text-center">

        <QrCode
          size={80}
          className="mx-auto text-blue-600"
        />

        <h1 className="mt-6 text-4xl font-bold">
          Verify Digital Passport
        </h1>


        <p className="mt-4 text-slate-600">
          Scan a product QR code to view complete passport information.
        </p>


        <div className="mt-10 rounded-2xl border bg-slate-50 p-8">

          QR Scanner will be added here.

        </div>

      </main>

      <Footer />
    </>
  );
}