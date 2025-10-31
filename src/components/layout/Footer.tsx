"use client";

import * as React from "react";
import { Link } from "@heroui/react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4 text-white">
              Sucoff Ventures
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building excellence across Ghana since 2015. Specialized in road construction, building projects, and civil engineering with uncompromising quality and safety standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-300">
                <FiMapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>Goaso-Dechem, Ahafo Region, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <FiPhone className="w-5 h-5 text-accent" />
                <a href="tel:+233244564256" className="hover:text-white transition-colors">
                  +233 (0) 24 456 4256
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <FiMail className="w-5 h-5 text-accent" />
                <a href="mailto:mikekwamecoffie@yahoo.com" className="hover:text-white transition-colors">
                  mikekwamecoffie@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Our Team", href: "/team" },
                { label: "Equipment", href: "/equipment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Certifications", href: "/certifications" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg text-white">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Sucoff Ventures. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all group"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
