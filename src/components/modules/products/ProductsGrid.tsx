"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiTool, FiPackage, FiGrid, FiLayers } from "react-icons/fi";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "building",
    title: "Building Construction",
    description: "We deliver quality construction for private and commercial projects, ensuring structural integrity, aesthetic value, and timely completion.",
    features: [
      "Residential Buildings",
      "Commercial Complexes",
      "Institutional Facilities",
      "Multi-Storey Structures",
    ],
    icon: FiGrid,
    color: "from-primary to-blue-700",
    image: "/image.png",
  },
  {
    id: "steel",
    title: "Steel & Fabrication",
    description: "We offer precision steel structures and fabrication services for residential, commercial, and industrial applications with uncompromising quality.",
    features: [
      "Structural Steel Works",
      "Custom Fabrication",
      "Steel Framework",
      "Industrial Applications",
    ],
    icon: FiLayers,
    color: "from-slate-600 to-slate-800",
    image: "/image.png",
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description: "Our civil engineering team constructs and maintains roads, drains, and infrastructure with durability, precision, and industry-best practices.",
    features: [
      "Road Construction",
      "Drainage Systems",
      "Infrastructure Development",
      "Earth Works",
    ],
    icon: FiTool,
    color: "from-accent to-orange-700",
    image: "/image.png",
  },
  {
    id: "carpentry",
    title: "Carpentry Services",
    description: "We provide expert carpentry services for structures and finishes, delivering durable woodwork with precision, craftsmanship, and proven reliability.",
    features: [
      "Custom Woodwork",
      "Roofing & Trusses",
      "Interior Finishes",
      "Formwork Systems",
    ],
    icon: FiPackage,
    color: "from-blue-600 to-blue-700",
    image: "/image.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function ProductsGrid() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Our comprehensive suite of products and capabilities enables us to deliver complete construction solutions from concept to completion. With modern equipment, skilled workforce, and proven methodologies, we ensure excellence across all service categories.
          </p>
          <p className="text-slate-600">
            From structural design to final finishes, every aspect of our work is executed with precision and adherence to international quality standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full rounded-2xl overflow-hidden bg-linear-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-xl bg-linear-to-br ${product.color} p-3.5 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold mb-4 text-fg group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">{product.description}</p>

                    <div className="space-y-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${product.color}`} />
                          <span className="text-sm text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

