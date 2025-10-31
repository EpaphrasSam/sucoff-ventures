"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { Link } from "@heroui/react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

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

type FilterType = "all" | "completed" | "ongoing";

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("all");

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => {
      if (activeFilter === "completed") return p.status === "completed";
      if (activeFilter === "ongoing") return p.status === "ongoing";
      return true;
    });
  }, [activeFilter]);

  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { value: "all", label: "All Work" },
              { value: "completed", label: "Completed" },
              { value: "ongoing", label: "Ongoing" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value as FilterType)}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          key={activeFilter}
        >
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link href={`/projects/${p.id}`} className="block group">
                <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    {p.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold shadow-lg">
                          {p.category}
                        </span>
                      </div>
                    )}
                    {p.status && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1.5 rounded-full backdrop-blur-sm text-xs font-semibold shadow-lg ${
                            p.status === "completed"
                              ? "bg-green-500/90 text-white"
                              : "bg-blue-500/90 text-white"
                          }`}
                        >
                          {p.status === "completed" ? "Completed" : "Ongoing"}
                        </span>
                      </div>
                    )}
                    {p.year && (
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
                          {p.year}
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
                        <FiMapPin className="w-4 h-4 text-primary" />
                        <span>{p.location}</span>
                      </div>
                    )}
                    <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View project details
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
