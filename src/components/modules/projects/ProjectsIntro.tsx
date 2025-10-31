"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiCheckCircle, FiTrendingUp, FiUsers } from "react-icons/fi";
import Image from "next/image";

export default function ProjectsIntro() {
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
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
            COMPLETED PROJECTS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-fg">
            Delivering Excellence Across Ghana
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Our portfolio showcases a diverse range of successfully completed projects that demonstrate our commitment to quality, innovation, and timely delivery. From road construction in the Bono Region to educational facilities across multiple districts, each project reflects our dedication to building Ghana&apos;s infrastructure.
            </p>
            <p>
              We have successfully executed projects including road construction at Berekum East Municipal, primary school facilities in Jaman South and Kwawu South districts, and special projects such as the construction of Bono Region&apos;s first-ever AstroTurf at Odumase. Each project is delivered with the same commitment to excellence, safety, and client satisfaction.
            </p>
            <p className="text-slate-600">
              Our project delivery approach combines technical expertise, modern equipment, skilled workforce, and rigorous quality control to ensure that every structure we build stands the test of time while meeting all regulatory and client requirements.
            </p>
          </div>
        </motion.div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/image.png"
              alt="Project showcase"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Infrastructure Development</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Building critical infrastructure that connects communities and drives economic growth across Ghana&apos;s regions.
              </p>
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
                <FiMapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Regional Coverage</h3>
              <p className="text-muted leading-relaxed mb-4">
                We have successfully delivered projects across multiple regions in Ghana, including Bono Region, Jaman South District, and Kwawu South District.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <FiCheckCircle className="w-5 h-5" />
                <span>Multi-regional presence</span>
              </div>
            </div>

            <div className="bg-linear-to-br from-accent/5 to-orange-50 rounded-2xl p-8 border border-accent/20">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-accent to-orange-700 flex items-center justify-center mb-6">
                <FiTrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Project Diversity</h3>
              <p className="text-muted leading-relaxed">
                Our expertise spans road construction, educational facilities, institutional buildings, and specialized sports infrastructure projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Project Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-fg">
            Our Project Categories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FiMapPin,
                title: "Road Construction",
                desc: "Modern highways and municipal roads",
                color: "from-primary to-blue-700",
              },
              {
                icon: FiCheckCircle,
                title: "Educational Facilities",
                desc: "Schools and training institutions",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: FiTrendingUp,
                title: "Special Projects",
                desc: "Sports facilities and unique structures",
                color: "from-accent to-orange-700",
              },
              {
                icon: FiUsers,
                title: "Institutional Buildings",
                desc: "Government and public facilities",
                color: "from-slate-700 to-slate-800",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${category.color} p-3 mx-auto mb-4`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h4 className="font-bold mb-2 text-fg">{category.title}</h4>
                <p className="text-sm text-muted">{category.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

