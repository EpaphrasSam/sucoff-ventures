"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiUsers, FiShield, FiHeart, FiTarget } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";

const VALUES = [
  { 
    text: "Precision in delivery", 
    desc: "We value precision in every detail, ensuring accuracy from planning to execution",
    icon: FiCheckCircle, 
    color: "from-blue-600 to-blue-700" 
  },
  { 
    text: "Innovation in every project", 
    desc: "Embracing cutting-edge technologies and modern construction methodologies",
    icon: FiZap, 
    color: "from-accent to-orange-700" 
  },
  { 
    text: "Collaboration at every level", 
    desc: "Working together with clients, partners, and stakeholders for shared success",
    icon: FiUsers, 
    color: "from-primary to-blue-700" 
  },
  { 
    text: "Safety and sustainability", 
    desc: "Prioritizing worker safety and environmental responsibility in all operations",
    icon: FiShield, 
    color: "from-blue-600 to-blue-700" 
  },
  { 
    text: "Client satisfaction", 
    desc: "Exceeding expectations and building lasting relationships through quality service",
    icon: FiHeart, 
    color: "from-accent to-orange-700" 
  },
  { 
    text: "Constructive excellence", 
    desc: "Building not just structures, but lasting relationships and a legacy of excellence",
    icon: FiTarget, 
    color: "from-slate-700 to-slate-800" 
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

export default function Values() {
  return (
    <section className="bg-white py-20 md:py-32">
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
          <div className="mb-6">
            <SectionTitle align="center" size="lg">
              The Principles That Guide Us
            </SectionTitle>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
            At Sucoff Ventures, our foundation is built on a commitment to Constructive Excellence. With a focus on safety, sustainability, and client satisfaction, we pave the way for a resilient and transformative future in the construction industry.
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
                <div className="h-full bg-linear-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${v.color} p-3.5 mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-fg">{v.text}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
