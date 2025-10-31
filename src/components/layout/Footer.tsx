"use client";

import * as React from "react";
import { Link } from "@heroui/react";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Management Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Equipment", href: "/equipment" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { id: "privacy", label: "Privacy Policy", href: "#" },
  { id: "terms", label: "Terms of Service", href: "#" },
  { id: "health", label: "Health & Safety", href: "#" },
  { id: "quality", label: "Quality Assurance", href: "#" },
  { id: "sustainability", label: "Sustainability", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-bg text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-4 md:grid-cols-2">
        {/* Company Info */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <p className="font-heading text-3xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Sucoff Ventures
            </p>
          </Link>
          <p className="text-slate-300 leading-relaxed mb-6">
            Building and civil engineering focused on quality, safety, and reliability across Ghana since 2015.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <FiMapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Goaso-Dechem, Ahafo Region</span>
            </div>
            <a href="tel:+233244564256" className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors">
              <FiPhone className="w-4 h-4 text-primary" />
              <span>+233 (0) 24 456 4256</span>
            </a>
            <a href="mailto:mikekwamecoffie@yahoo.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors break-all">
              <FiMail className="w-4 h-4 text-primary" />
              <span>mikekwamecoffie@yahoo.com</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-6 text-lg text-white">Quick Links</p>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <p className="font-semibold mb-6 text-lg text-white">Legal & Policies</p>
          <ul className="space-y-3">
            {LEGAL_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Updates */}
        <div>
          <p className="font-semibold mb-6 text-lg text-white">Gallery Updates</p>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden bg-slate-800 group cursor-pointer"
              >
                <Image
                  src="/image.png"
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary-foreground font-semibold transition-all"
          >
            Scroll to Top
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative border-t border-slate-700 py-6 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Sucoff Ventures. All rights reserved. | Built with excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
