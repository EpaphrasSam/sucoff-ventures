"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiShield } from "react-icons/fi";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

export default function Welcome() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            WELCOME TO SUCOFF VENTURES
          </div>
          <div className="mb-6">
            <SectionTitle align="center" size="xl">
              A Leading Construction Company in Ghana
            </SectionTitle>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              SUCOFF VENTURES is a leading construction company in Ghana dedicated to delivering top-quality infrastructure, innovative construction solutions, and reliable building services across the country. Our clients trust us for our technical expertise, commitment to quality, and our ability to turn bold ideas into solid, lasting structures.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We follow guidance from recognized professional bodies and align our work with international quality management best practices. Since our establishment in 2015, we have been active in indigenous road construction, building projects, and civil engineering works.
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image.png"
                alt="Construction site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-2">10+ Years of Excellence</h3>
                <p className="text-slate-200 text-lg">
                  Delivering impactful construction experience marked by quality, integrity, and client satisfaction across Ghana.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-linear-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary to-blue-700 flex items-center justify-center mb-6">
                <FiAward className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Committed to Standards</h3>
              <p className="text-muted leading-relaxed">
                Aligned with applicable regulations and industry guidance for building and civil works.
              </p>
            </div>

            <div className="bg-linear-to-br from-accent/5 to-orange-50 rounded-2xl p-8 border border-accent/20">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-accent to-orange-700 flex items-center justify-center mb-6">
                <FiUsers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Trusted by Industry Leaders</h3>
              <p className="text-muted leading-relaxed">
                Our success is strengthened by partnerships with some of the industry&apos;s most respected consultants, subcontractors, and institutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: FiTrendingUp,
              title: "Proven Track Record",
              desc: "Numerous successful projects delivered on time and within budget",
              color: "from-blue-600 to-blue-700",
            },
            {
              icon: FiShield,
              title: "Safety First",
              desc: "Rigorous safety protocols and zero-tolerance for workplace incidents",
              color: "from-primary to-blue-700",
            },
            {
              icon: FiAward,
              title: "Quality Assurance",
              desc: "Committed to quality management best practices in every project phase",
              color: "from-accent to-orange-700",
            },
            {
              icon: FiUsers,
              title: "Expert Team",
              desc: "Highly qualified engineers and project managers with decades of experience",
              color: "from-slate-700 to-slate-800",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} p-3.5 mx-auto mb-4`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="font-bold mb-2 text-fg">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

