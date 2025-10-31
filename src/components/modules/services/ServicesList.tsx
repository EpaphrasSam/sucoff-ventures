"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/constants/services";
import { FiTrendingUp, FiHome, FiBriefcase, FiLayers } from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  road: FiTrendingUp,
  building: FiHome,
  civil: FiLayers,
  pm: FiBriefcase,
};

const colorMap: Record<string, string> = {
  road: "from-primary to-blue-700",
  building: "from-blue-600 to-blue-700",
  civil: "from-accent to-orange-700",
  pm: "from-slate-700 to-slate-800",
};

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

export default function ServicesList() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((s) => {
            const Icon = iconMap[s.id] || FiBriefcase;
            const colorClass = colorMap[s.id] || "from-primary to-blue-700";
            return (
              <motion.div
                key={s.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${colorClass} p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-fg group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{s.description}</p>
                    </div>
                  </div>

                  <div className="relative h-56 w-full overflow-hidden rounded-xl">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
