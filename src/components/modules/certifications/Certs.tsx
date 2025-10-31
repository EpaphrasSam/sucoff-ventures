"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/constants/certifications";
import { FiAward, FiCheckCircle } from "react-icons/fi";

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

export default function Certs() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Key Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary/5 to-blue-50 rounded-2xl p-10 border border-primary/20"
          >
            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-primary to-blue-700 p-4 mb-6 shadow-lg">
              <FiAward className="w-full h-full text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-fg">
              Ministry of Works & Housing
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Officially classified by the Ministry of Works and Housing for general building works and civil works in Ghana and beyond. This certification demonstrates our commitment to quality and compliance with national standards.
            </p>
            <div className="space-y-3">
              {[
                "General Building Works",
                "Civil Engineering Projects",
                "Road Construction",
                "Infrastructure Development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-fg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-accent/5 to-orange-50 rounded-2xl p-10 border border-accent/20"
          >
            <div className="w-16 h-16 rounded-xl bg-linear-to-br from-accent to-orange-700 p-4 mb-6 shadow-lg">
              <FiCheckCircle className="w-full h-full text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-fg">Quality Standards</h3>
            <p className="text-muted leading-relaxed mb-6">
              Our operations adhere to international quality management standards, ensuring consistent delivery of excellence in every project we undertake across Ghana.
            </p>
            <div className="space-y-3">
              {[
                "ISO 9001 Quality Management",
                "Safety Compliance Standards",
                "Environmental Best Practices",
                "Industry Best Practices",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-fg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certification Documents */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id ?? `${cert.title}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-linear-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-fg group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
