"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiCheckCircle } from "react-icons/fi";

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-700 p-4 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiTarget className="w-full h-full text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-fg">Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                At Sucoff Ventures, our mission is to redefine the construction landscape by driving innovation, sustainability, and excellence in every project we undertake.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are committed to delivering exceptional value to our clients while maintaining the highest standards of safety, quality, and environmental responsibility. Our goal is to be the most trusted construction partner in Ghana.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 border border-slate-200 hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-orange-700 p-4 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiEye className="w-full h-full text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-fg">Our Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our vision is to be a leading force in shaping the future of construction where cutting‑edge technologies, sustainable practices, and collaborative partnerships define the industry.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We envision a landscape where innovation meets tradition, creating structures that stand the test of time while incorporating modern construction methodologies and eco-friendly approaches.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 md:p-12 text-white"
        >
          <div className="max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Sucoff Ventures, as a construction company, specializes in strategic investments and partnerships within the construction industry. We actively seek collaborations and partnerships that enhance efficiency, incorporate cutting-edge technologies, and promote sustainable practices within the construction sector.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Our key services include strategic investments in promising construction ventures, project development, construction management, and fostering collaborations within the industry. We specialize in identifying opportunities that align with our commitment to quality, innovation, and sustainability, contributing to the positive transformation of construction projects.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Strategic Project Investments",
                "Construction Management",
                "Quality Assurance Programs",
                "Technical Innovation",
                "Industry Partnerships",
                "Sustainable Practices",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <FiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
