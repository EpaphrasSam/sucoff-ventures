"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAward, FiTrendingUp, FiUsers } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";

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
          <div className="mb-6">
            <SectionTitle align="center" size="xl">
              Comprehensive Construction Solutions
            </SectionTitle>
          </div>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              SUCOFF VENTURES delivers quality construction for private and commercial projects, ensuring structural integrity, aesthetic value, and timely completion. Our comprehensive suite of services covers every aspect of construction—from initial planning and design to final handover and beyond.
            </p>
            <p>
              We provide expert construction services for structures and finishes, delivering durable work with precision, craftsmanship, and proven reliability. Our civil engineering team constructs and maintains roads, drains, and infrastructure with durability, precision, and industry-best practices.
            </p>
            <p className="text-slate-600">
              With certification from the Ministry of Works and Housing and alignment to recognized quality management best practices, we ensure that every project meets appropriate benchmarks for quality, safety, and environmental responsibility.
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
            <div className="mb-4">
              <SectionTitle align="left" size="sm">Certified Excellence</SectionTitle>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              We offer precision steel structures and fabrication services for residential, commercial, and industrial applications with uncompromising quality. Our team follows standards set by the Ghana Institution of Engineers.
            </p>
            <ul className="space-y-3">
              {[
                "Ministry of Works Certified",
                "Quality Management Best Practices",
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
            <div className="mb-4">
              <SectionTitle align="left" size="sm">Proven Track Record</SectionTitle>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Through a well-structured production schedule, innovative solutions, and a commitment to quality, we ensure clients receive durable and precisely executed construction services that meet both structural and aesthetic standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-accent/20">
                <div className="text-3xl font-bold text-fg mb-1">Proven</div>
                <div className="text-sm text-muted">Project Portfolio</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-accent/20">
                <div className="text-3xl font-bold text-fg mb-1">Experienced</div>
                <div className="text-sm text-muted">Team Expertise</div>
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
              <div className="mb-6">
                <h3 className="font-heading text-3xl font-bold mb-3 text-white">Our Approach to Excellence</h3>
                <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
              </div>
              <p className="text-slate-200 leading-relaxed mb-6">
                Our experienced team, supported by industry experts, continuously enhances our offerings through product demonstrations, technical workshops, and customer engagement initiatives—empowering contractors and builders to deliver excellence on every project here in Ghana.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We produce high-standard construction solutions tailored to project specifications, ensuring strength, reliability, and long-term performance across all service categories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FiCheckCircle, label: "Quality Assurance", value: "Strong" },
                { icon: FiUsers, label: "Expert Team", value: "Skilled" },
                { icon: FiTrendingUp, label: "On-Time Delivery", value: "Reliable" },
                { icon: FiAward, label: "Client Satisfaction", value: "Trusted" },
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

