"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiFileText } from "react-icons/fi";

export default function ContactInfo() {
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-fg">
            We're Here to Help
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Whether you're planning a new construction project, need expert consultation, or have questions about our services, our team is ready to assist you. We're committed to providing prompt, professional responses to all inquiries.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contact us today to discuss how we can bring your construction vision to life with quality, precision, and reliability.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiPhone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Call Us</h3>
              <p className="text-muted mb-4">Speak directly with our team</p>
              <a
                href="tel:+233244564256"
                className="block text-primary font-semibold hover:text-primary/80 transition-colors mb-2"
              >
                +233 (0) 24 456 4256
              </a>
              <p className="text-sm text-slate-500">Mon - Fri, 8AM - 5PM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-accent/5 to-orange-50 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiMail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Email Us</h3>
              <p className="text-muted mb-4">Send us a detailed message</p>
              <a
                href="mailto:mikekwamecoffie@yahoo.com"
                className="block text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                mikekwamecoffie@yahoo.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiMapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-fg">Visit Us</h3>
              <p className="text-muted mb-4">Come see us in person</p>
              <p className="text-slate-700 font-medium">
                Goaso-Dechem, Ahafo Region
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 md:p-12 text-white"
        >
          <h3 className="font-heading text-3xl font-bold mb-8 text-center">
            How We Can Help You
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FiMessageCircle,
                title: "Project Consultation",
                desc: "Discuss your construction needs and get expert advice on project feasibility and approach",
              },
              {
                icon: FiFileText,
                title: "Request a Quote",
                desc: "Receive detailed, transparent pricing for your construction project with no hidden costs",
              },
              {
                icon: FiClock,
                title: "Schedule a Visit",
                desc: "Book a site visit or office meeting to discuss your project requirements in detail",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

