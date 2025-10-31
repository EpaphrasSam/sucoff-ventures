"use client";

import * as React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg text-fg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">Sucoff Ventures</p>
          <p className="text-sm text-muted mt-2">
            Building and civil engineering focused on quality and reliability.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:mikekwamecoffie@yahoo.com">
                mikekwamecoffie@yahoo.com
              </a>
            </li>
            <li>
              <a href="tel:+233244564256">+233 (0) 24 456 4256</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Sucoff Ventures. All rights reserved.
      </div>
    </footer>
  );
}
