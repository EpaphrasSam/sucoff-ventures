"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { Link } from "@heroui/react";
import { FiArrowRight, FiMapPin, FiCalendar } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function ProjectsGrid() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Link href={`/projects/${p.id}`} className="block group h-full">
                <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-primary/30">
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    {p.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm text-primary text-xs font-bold shadow-lg">
                          {p.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    {p.location && (
                      <div className="flex items-center gap-2 text-muted text-sm mb-4">
                        <FiMapPin className="w-4 h-4 text-accent" />
                        <span>{p.location}</span>
                      </div>
                    )}
                    <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project Details
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
