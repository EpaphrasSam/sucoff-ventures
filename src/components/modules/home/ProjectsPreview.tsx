"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiMapPin, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { projects } from "@/constants/projects";

export default function HomeProjectsPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false, align: "start" });

  // Autoplay
  React.useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between gap-4 mb-16"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary">
            <FiStar className="text-accent" />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <div className="mb-2">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              Featured <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-primary to-accent rounded-full mb-2" />
          </div>
          <p className="text-muted text-lg">Showcasing our excellence in construction</p>
        </div>
        <Button
          as={Link}
          href="/projects"
          variant="bordered"
          size="lg"
          endContent={<FiArrowRight />}
          className="hidden md:flex border-primary/30 text-primary hover:bg-primary/5"
        >
          View all
        </Button>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {projects.slice(0, 4).map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-0 basis-full sm:basis-[48%] lg:basis-[31%] flex-shrink-0"
              >
                <Link href={`/projects/${p.id}`} className="block group">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                      {p.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium">
                            {p.category}
                          </span>
                        </div>
                      )}
                      {p.year && (
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-white text-xs font-medium">
                            {p.year}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-fg group-hover:text-primary transition-colors">{p.title}</h3>
                      {p.location && (
                        <div className="flex items-center gap-2 text-muted text-sm">
                          <FiMapPin className="w-4 h-4 text-primary" />
                          <span>{p.location}</span>
                        </div>
                      )}
                      <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        View details
                        <FiArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-0 pointer-events-none">
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            onClick={() => emblaApi?.scrollPrev()}
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all pointer-events-auto"
          >
            <FiChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            onClick={() => emblaApi?.scrollNext()}
            className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all pointer-events-auto"
          >
            <FiChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>

      <div className="mt-12 flex justify-center md:hidden">
        <Button
          as={Link}
          href="/projects"
          variant="bordered"
          size="lg"
          endContent={<FiArrowRight />}
          className="border-primary/30 text-primary hover:bg-primary/5"
        >
          View all projects
        </Button>
      </div>
    </section>
  );
}
