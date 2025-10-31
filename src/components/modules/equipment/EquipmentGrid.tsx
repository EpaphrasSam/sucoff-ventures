"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { equipment } from "@/constants/equipment";

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

export default function EquipmentGrid() {
  // Group equipment by category
  const categories = React.useMemo(() => {
    const grouped: Record<string, typeof equipment> = {};
    equipment.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, []);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our extensive fleet of modern construction equipment enables us to deliver projects efficiently and safely. We invest continuously in state-of-the-art machinery to ensure optimal performance and reliability across all project types.
          </p>
          <p className="text-slate-600">
            From heavy-duty excavators to precision concrete equipment, our plant inventory supports every phase of construction—from site preparation to final finishing.
          </p>
        </motion.div>

        {/* Equipment by Category */}
        <div className="space-y-16">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-fg mb-2">{category}</h2>
                <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="h-full rounded-2xl overflow-hidden bg-linear-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold mb-2 text-fg group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
