"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2 } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/passport", label: "Passports" },
  { href: "/admin", label: "Admin" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-200">
            <Package2 className="text-white" size={24} />
          </div>

          <div>

            <h1 className="text-xl font-bold tracking-wide text-slate-900">
              NEWDIGI
            </h1>

            <p className="text-xs tracking-[0.25em] text-slate-500 uppercase">
              Digital Part Passport
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-sm lg:flex">

          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

        </div>

        {/* CTA */}

        <Link
          href="/admin"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex"
        >
          Dashboard
        </Link>

        {/* Mobile Button */}

        <button
          className="rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </nav>

    </header>
  );
}