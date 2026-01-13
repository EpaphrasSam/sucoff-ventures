"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { FiMapPin } from "react-icons/fi";
import ProjectGallery from "./ProjectGallery";

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
  const [selectedProject, setSelectedProject] = React.useState<{
    images: string[];
    title: string;
  } | null>(null);

  return (
    <>
      <section className="bg-linear-to-b from-slate-50 to-white py-20 md:py-32">
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
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <button
                  onClick={() =>
                    setSelectedProject({ images: p.images, title: p.title })
                  }
                  className="w-full text-left block group"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
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
                      {p.images.length > 1 && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold shadow-lg">
                            {p.images.length} photos
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
                        View gallery
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ProjectGallery
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={selectedProject.images}
          title={selectedProject.title}
        />
      )}
    </>
  );
}
