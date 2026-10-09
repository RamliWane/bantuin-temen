"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";

const links = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Perjalanan", href: "#perjalanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kepemimpinan", href: "#kepemimpinan" },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="text-[14px] font-bold tracking-tight text-navy">
              SMK TARUNA BHAKTI
            </span>
            <span className="mt-[5px] text-[11px] font-medium text-brand">
              Cimanggis &middot; Depok
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navigasi utama">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium text-navy transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://smktarunabhakti.sch.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-[8px] bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-brand"
          >
            PPDB 2026
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line text-navy lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div id="nav-mobile" className="border-t border-line bg-white lg:hidden">
          <nav
            className="mx-auto max-w-[1240px] px-5 py-3 sm:px-6"
            aria-label="Navigasi seluler"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3.5 text-[14px] font-medium text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://smktarunabhakti.sch.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-full items-center justify-center rounded-[8px] bg-navy text-[14px] font-semibold text-white"
                >
                  PPDB 2026
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
