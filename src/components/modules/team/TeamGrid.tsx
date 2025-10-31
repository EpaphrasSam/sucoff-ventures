"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/constants/team";
import { FiLinkedin, FiMail, FiAward, FiBriefcase } from "react-icons/fi";

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

export default function TeamGrid() {
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
          <p className="text-lg text-slate-700 leading-relaxed">
            This team is responsible for making strategic decisions, overseeing day-to-day operations, and driving the company towards its goals. Effective communication, leadership, and a shared vision among team members are crucial for success. Additionally, adaptability and the ability to navigate challenges are key qualities for our management team to lead through various business environments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold mb-1 text-fg group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{m.title}</p>
                  
                  <div className="space-y-2 mb-4 pt-3 border-t border-slate-200">
                    <div className="flex items-start gap-2 text-xs text-muted">
                      <FiAward className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{m.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <FiBriefcase className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{m.experience} experience</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 pt-3 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <FiMail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
