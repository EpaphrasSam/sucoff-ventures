"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiHome, FiBriefcase, FiLayers } from "react-icons/fi";
import { Link } from "@heroui/react";

const SERVICES = [
  {
    title: "Road Construction",
    desc: "Professional road infrastructure and drainage systems built to international standards with precision engineering.",
    icon: FiTrendingUp,
    color: "from-primary to-blue-700",
    bgGradient: "from-blue-50 to-blue-100/50",
  },
  {
    title: "Building Construction",
    desc: "Residential, commercial and institutional structures delivered with architectural excellence and structural integrity.",
    icon: FiHome,
    color: "from-blue-600 to-blue-700",
    bgGradient: "from-slate-50 to-slate-100/50",
  },
  {
    title: "Civil Engineering",
    desc: "Comprehensive infrastructure solutions combining technical expertise with sustainable development practices.",
    icon: FiLayers,
    color: "from-accent to-orange-700",
    bgGradient: "from-orange-50 to-orange-100/50",
  },
  {
    title: "Project Management",
    desc: "End-to-end project oversight ensuring quality control, timeline adherence, and budget optimization.",
    icon: FiBriefcase,
    color: "from-slate-700 to-slate-800",
    bgGradient: "from-slate-50 to-slate-100/50",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function HomeServices() {
  return (
    <section className="relative bg-slate-50 py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            OUR SERVICES
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-fg">
            Expert Construction Solutions
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Comprehensive services delivered by experienced professionals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link href="/services" className="block h-full">
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-primary/30 overflow-hidden">
                    {/* Hover Background Effect */}
                                <div className={`absolute inset-0 bg-linear-to-br ${s.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className="relative mb-6">
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${s.color} p-3.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-sm mb-4">{s.desc}</p>

                      <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
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
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
