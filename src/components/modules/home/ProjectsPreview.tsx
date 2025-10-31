"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiMapPin, FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PROJECTS = [
  { title: "Berekum East Road", location: "Bono Region", image: "/image.png", category: "Road Construction", year: "2023" },
  { title: "Memano Primary School", location: "Jaman South", image: "/image.png", category: "Building", year: "2023" },
  { title: "Bepong Primary School", location: "Kwawu South", image: "/image.png", category: "Building", year: "2022" },
  { title: "Odumase AstroTurf", location: "Bono Region", image: "/image.png", category: "Special Project", year: "2024" },
];

export default function HomeProjectsPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(15,59,133,0.03),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              OUR PORTFOLIO
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-fg">
              Featured Projects
            </h2>
            <p className="text-muted text-lg max-w-xl">Excellence delivered across Ghana</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-lg bg-white border-2 border-slate-200 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Previous"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-lg bg-white border-2 border-slate-200 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Next"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
            <Button
              as={Link}
              href="/projects"
              size="lg"
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg ml-3"
              endContent={<FiArrowRight />}
            >
              View All
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {PROJECTS.map((p, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
              >
                <Link href="/projects" className="block group h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-primary/30">
                    <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-primary text-xs font-bold shadow-lg">
                          {p.category}
                        </span>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium">
                          <FiCalendar className="w-3 h-3" />
                          {p.year}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted text-sm mb-4">
                        <FiMapPin className="w-4 h-4 text-accent" />
                        <span>{p.location}</span>
                      </div>
                      <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        View Project
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button
            as={Link}
            href="/projects"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg"
            endContent={<FiArrowRight />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
