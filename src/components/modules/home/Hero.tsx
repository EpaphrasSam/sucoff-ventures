"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const SLIDES = [
  {
    title: "Building Excellence Across Ghana",
    subtitle: "Residential & Institutional Projects Delivered With Precision",
    description:
      "From design to handover, we deliver modern buildings that meet the highest standards of quality, safety, and style.",
    cta: "View Projects",
    ctaLink: "/projects",
  },
  {
    title: "Engineered for Scale and Performance",
    subtitle: "Road Construction & Civil Engineering Experts",
    description:
      "We build durable roads and civil infrastructure that power development and connectivity across Ghana's regions.",
    cta: "Our Services",
    ctaLink: "/services",
  },
  {
    title: "Certified Quality & Safety Standards",
    subtitle: "Ministry of Works Approved Contractor",
    description:
      "With ISO 9001 compliance and Ministry certification, we deliver projects that exceed industry standards and client expectations.",
    cta: "Learn More",
    ctaLink: "/about",
  },
];

export default function HomeHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Sync selected index
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  React.useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 6000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="relative bg-dark-bg text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Slides */}
      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-20">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {SLIDES.map((s, idx) => (
                <div key={idx} className="min-w-0 flex-[0_0_100%]">
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: idx === selectedIndex ? 1 : 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        {s.title}
                      </h1>
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-linear-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                        {s.subtitle}
                      </h2>
                      <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          as={Link}
                          href={s.ctaLink}
                          color="primary"
                          variant="solid"
                          size="lg"
                          className="font-semibold"
                          endContent={<FiArrowRight />}
                        >
                          {s.cta}
                        </Button>
                        <Button
                          as={Link}
                          href="/contact"
                          variant="bordered"
                          size="lg"
                          className="border-white/30 text-white backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center relative w-full h-80 md:h-96">
                      <Image
                        src="/image.png"
                        alt="Construction site"
                        fill
                        className="object-cover rounded-2xl shadow-2xl border border-primary/20"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 to-transparent rounded-2xl" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-accent w-8"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative bg-slate-800/50 backdrop-blur-sm border-t border-white/10 py-6 md:py-8"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-3 gap-6 md:gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold mb-1 text-accent">
              10+
            </div>
            <div className="text-xs md:text-sm text-slate-300">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold mb-1 text-accent">
              100+
            </div>
            <div className="text-xs md:text-sm text-slate-300">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold mb-1 text-accent">
              100%
            </div>
            <div className="text-xs md:text-sm text-slate-300">
              Client Satisfaction
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
