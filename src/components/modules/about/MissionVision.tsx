"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-700 p-4 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiTarget className="w-full h-full text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-fg">Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Sucoff Ventures, our mission is to redefine the construction landscape by driving innovation, sustainability, and excellence in every project we undertake. We are committed to delivering exceptional value to our clients while maintaining the highest standards of safety and quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="h-full bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 border border-slate-200 hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-orange-700 p-4 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiEye className="w-full h-full text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-fg">Our Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our vision is to be a leading force in shaping the future of construction where cutting‑edge technologies, sustainable practices, and collaborative partnerships define the industry. We aspire to be the most trusted construction partner in Ghana.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
