"use client";

import * as React from "react";
import { Button, Link } from "@heroui/react";

export default function HomeHero() {
  return (
    <section className="relative bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-40 text-primary-foreground">
        <h1 className="font-heading text-3xl md:text-5xl font-semibold">
          Building Excellence with Precision
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-primary-foreground/90">
          Roads, buildings and civil engineering executed with quality, safety,
          and on-time delivery.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            as={Link}
            href="/projects"
            color="primary"
            variant="solid"
            size="md"
          >
            View Projects
          </Button>
          <Button
            as={Link}
            href="/contact"
            variant="bordered"
            size="md"
            className="border-primary-foreground text-primary-foreground"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
