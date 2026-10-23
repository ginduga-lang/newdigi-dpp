"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Package2, X, Menu } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/passport", label: "Passports" },
  { href: "/admin", label: "Admin" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">


        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-200">

            <Package2
              className="text-white"
              size={24}
            />

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



        {/* Desktop Menu */}

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-sm lg:flex">

          {links.map((link) => {

            const active = pathname === link.href;


            return (

              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >

                {link.label}

              </Link>

            );

          })}

        </div>



        {/* Desktop Button */}

        <Link
          href="/admin"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white lg:inline-flex"
        >
          Dashboard
        </Link>



        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-300 p-3 lg:hidden"
          aria-label="Toggle menu"
        >

{menuOpen ? (
  <X size={24} />
) : (
  <Menu size={24} />
)}

        </button>


      </nav>



      {/* Mobile Menu */}

      {menuOpen && (

        <div className="absolute left-0 top-20 z-50 w-full border-t border-slate-200 bg-white px-6 py-6 shadow-lg lg:hidden">


          <div className="flex flex-col gap-3">


            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100"
              >

                {link.label}

              </Link>

            ))}



            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white"
            >

              Dashboard

            </Link>


          </div>


        </div>

      )}


    </header>

  );
}