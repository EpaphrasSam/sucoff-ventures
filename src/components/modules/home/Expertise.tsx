"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { label: "Project Delivery", value: 98 },
  { label: "Quality Standards", value: 96 },
  { label: "Safety Compliance", value: 99 },
  { label: "Client Satisfaction", value: 100 },
];

export default function Expertise() {
  return (
    <section className="relative bg-linear-to-br from-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm mb-4">
            OUR EXPERTISE
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            A Foundation of Strength and Precision
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With a team of experienced engineers and project managers, we deliver high-quality construction services that meet and exceed industry standards. From planning to completion, we maintain rigorous quality controls and innovative techniques to ensure strength, durability, and performance across all projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {METRICS.map((metric, index) => (
              <MetricBar key={metric.label} metric={metric} delay={index * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quality-Driven Approach</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Through a well-structured project management system, innovative solutions, and a commitment to quality, we ensure clients receive exceptional construction services that meet both structural and aesthetic standards.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our experienced team, supported by industry experts, continuously enhances our offerings through technical training, safety workshops, and stakeholder engagement initiatives—empowering our workforce to deliver excellence on every project.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">ISO 9001</div>
                <div className="text-sm text-slate-300">Certified Quality</div>
              </div>
              <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-slate-300">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricBar({ metric, delay }: { metric: { label: string; value: number }; delay: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(metric.value);
      }, delay * 1000);
    }
  }, [isInView, metric.value, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-white font-semibold">{metric.label}</span>
        <span className="text-white font-bold">{metric.value}%</span>
      </div>
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

