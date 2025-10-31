"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAward, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            LEADING CONSTRUCTION COMPANY IN GHANA
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-fg">
            Comprehensive Construction Solutions
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              SUCOFF VENTURES delivers quality construction for private and commercial projects, ensuring structural integrity, aesthetic value, and timely completion. Our comprehensive suite of services covers every aspect of construction—from initial planning and design to final handover and beyond.
            </p>
            <p>
              We provide expert construction services for structures and finishes, delivering durable work with precision, craftsmanship, and proven reliability. Our civil engineering team constructs and maintains roads, drains, and infrastructure with durability, precision, and industry-best practices.
            </p>
            <p className="text-slate-600">
              With certifications from the Ministry of Works and Housing and adherence to ISO 9001 Quality Management standards, we ensure that every project meets international benchmarks for quality, safety, and environmental responsibility.
            </p>
          </div>
        </motion.div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20"
          >
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary to-blue-700 flex items-center justify-center mb-6">
              <FiAward className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-fg">Certified Excellence</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We offer precision steel structures and fabrication services for residential, commercial, and industrial applications with uncompromising quality. Our team follows standards set by the Ghana Institution of Engineers.
            </p>
            <ul className="space-y-3">
              {[
                "Ministry of Works Certified",
                "ISO 9001 Quality Standards",
                "International Best Practices",
                "Ghana Institution of Engineers Standards",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-accent/5 to-orange-50 rounded-2xl p-8 border border-accent/20"
          >
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-accent to-orange-700 flex items-center justify-center mb-6">
              <FiTrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-fg">Proven Track Record</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Through a well-structured production schedule, innovative solutions, and a commitment to quality, we ensure clients receive durable and precisely executed construction services that meet both structural and aesthetic standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-accent/20">
                <div className="text-3xl font-bold text-fg mb-1">100+</div>
                <div className="text-sm text-muted">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-accent/20">
                <div className="text-3xl font-bold text-fg mb-1">10+</div>
                <div className="text-sm text-muted">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-10 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold mb-6">Our Approach to Excellence</h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                Our experienced team, supported by industry experts, continuously enhances our offerings through product demonstrations, technical workshops, and customer engagement initiatives—empowering contractors and builders to deliver excellence on every project here in Ghana.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We produce high-standard construction solutions tailored to project specifications, ensuring strength, reliability, and long-term performance across all service categories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FiCheckCircle, label: "Quality Assurance", value: "100%" },
                { icon: FiUsers, label: "Expert Team", value: "50+" },
                { icon: FiTrendingUp, label: "On-Time Delivery", value: "98%" },
                { icon: FiAward, label: "Client Satisfaction", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

