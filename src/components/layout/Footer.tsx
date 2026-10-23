import Link from "next/link";
import {
  Package2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Package2 className="text-white" />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  NEWDIGI
                </h2>

                <p className="text-sm text-slate-400">
                  Digital Part Passport
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Helping manufacturers build secure,
              traceable and sustainable Digital Part
              Passports for Industry 4.0.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li><Link href="/" className="hover:text-white">Home</Link></li>

              <li><Link href="/passport" className="hover:text-white">Passports</Link></li>

              <li><Link href="/admin" className="hover:text-white">Admin</Link></li>

              <li><Link href="/about" className="hover:text-white">About</Link></li>

            </ul>

          </div>

          {/* Platform */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Platform
            </h3>

            <ul className="mt-6 space-y-4">

              <li>Digital Traceability</li>

              <li>Sustainability</li>

              <li>Compliance</li>

              <li>QR Verification</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>info@newdigi.com</span>

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>Coimbatore, India</span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 NEWDIGI. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with Next.js 15 • React 19 • Supabase
          </p>

        </div>

      </div>

    </footer>
  );
}