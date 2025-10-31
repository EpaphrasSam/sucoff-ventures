"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiAward, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/image.png"
          alt="Construction"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
              <FiAward className="text-accent w-4 h-4" />
              <span className="text-sm font-medium text-white">
                Est. 2015 • Ministry of Works Certified
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Building Excellence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-500 to-accent">
                Across Ghana
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-300 mb-8 leading-relaxed">
              Professional road construction, building projects, and civil engineering delivered with precision, safety, and unwavering commitment to quality.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                as={Link}
                href="/projects"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
                endContent={<FiArrowRight />}
              >
                View Our Projects
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
              >
                Get a Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "10+", label: "Years" },
                { value: "100+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: FiCheckCircle, text: "Ministry of Works Certified", color: "text-green-400" },
                    { icon: FiCheckCircle, text: "ISO 9001 Quality Standards", color: "text-blue-400" },
                    { icon: FiCheckCircle, text: "On-Time Project Delivery", color: "text-orange-400" },
                    { icon: FiCheckCircle, text: "Expert Engineering Team", color: "text-purple-400" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
