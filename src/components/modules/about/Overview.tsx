"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";

export default function AboutOverview() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: FiCalendar,
              value: "2015",
              label: "Established",
              color: "from-primary to-blue-700",
              bgColor: "bg-blue-50",
            },
            {
              icon: FiAward,
              value: "Certified",
              label: "Ministry of Works",
              color: "from-blue-600 to-blue-700",
              bgColor: "bg-slate-50",
            },
            {
              icon: FiMapPin,
              value: "Ahafo Region",
              label: "Goaso-Dechem",
              color: "from-accent to-orange-700",
              bgColor: "bg-orange-50",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className={`h-full ${stat.bgColor} rounded-2xl p-8 border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500`}>
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${stat.color} p-3.5 mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 text-fg">{stat.value}</div>
                <div className="text-muted font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-fg">
              Professional Construction Excellence
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Sucoff Ventures was incorporated under the Ghana Company code as a Limited Liability Company in October 2015. Our key services include indigenous road construction, building construction, and civil engineering.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Sucoff Ventures, we focus on identifying and supporting construction ventures that exhibit unparalleled potential. Our head office is located at Goaso-Dechem, Ahafo Region, where we orchestrate projects that transform communities and infrastructure across Ghana.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Ministry of Works Certified",
              "ISO 9001 Quality Standards",
              "Experienced Engineering Team",
              "Proven Project Delivery",
              "Safety-First Approach",
              "Modern Equipment Fleet",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-slate-50 to-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-blue-700 flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-fg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
