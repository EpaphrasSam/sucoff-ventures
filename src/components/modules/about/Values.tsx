"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiUsers, FiShield, FiHeart } from "react-icons/fi";

const VALUES = [
  { text: "Precision in delivery", icon: FiCheckCircle, color: "from-blue-600 to-blue-700" },
  { text: "Innovation in every project", icon: FiZap, color: "from-accent to-orange-700" },
  { text: "Collaboration at every level", icon: FiUsers, color: "from-green-600 to-green-700" },
  { text: "Safety and sustainability", icon: FiShield, color: "from-purple-600 to-purple-700" },
  { text: "Client satisfaction", icon: FiHeart, color: "from-red-600 to-red-700" },
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

export default function Values() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            OUR VALUES
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-fg">
            The Principles That Guide Us
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Core values that shape everything we do
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.text}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-white rounded-xl p-8 border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${v.color} p-3.5 mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <p className="font-semibold text-lg text-fg">{v.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
