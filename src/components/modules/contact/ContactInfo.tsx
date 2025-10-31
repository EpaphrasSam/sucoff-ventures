"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiFileText,
  FiCalendar,
} from "react-icons/fi";

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
            We&apos;re Here to Help
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Whether you&apos;re planning a new construction project, need expert
            consultation, or have questions about our services, our team is
            ready to assist you. We&apos;re committed to providing prompt,
            professional responses to all inquiries.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contact us today to discuss how we can bring your construction
            vision to life with quality, precision, and reliability.
          </p>
        </motion.div>

        {/* Office Locations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Head Office */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full bg-linear-to-br from-primary/5 to-blue-50 rounded-2xl p-8 md:p-10 border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-primary to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiMapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-fg">Head Office</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1">
                    Location
                  </p>
                  <p className="text-slate-700 font-medium">Goaso-Dechem</p>
                  <p className="text-slate-700">Ahafo Region, Ghana</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+233244564256"
                    className="block text-primary font-semibold hover:text-primary/80 transition-colors mb-1"
                  >
                    +233 (0) 24 456 4256
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:mikekwamecoffie@yahoo.com"
                    className="block text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    mikekwamecoffie@yahoo.com
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2 text-sm text-slate-600">
                  <FiClock className="w-4 h-4" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regional Office (Placeholder for future expansion) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full bg-linear-to-br from-accent/5 to-orange-50 rounded-2xl p-8 md:p-10 border border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-accent to-orange-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FiPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-fg">Get in Touch</h3>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  For project inquiries, quotations, or general information,
                  reach out to our head office during business hours.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <FiPhone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-fg mb-1">Main Line</p>
                      <a
                        href="tel:+233244564256"
                        className="text-primary hover:underline"
                      >
                        +233 (0) 24 456 4256
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <FiMail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-fg mb-1">Email</p>
                      <a
                        href="mailto:mikekwamecoffie@yahoo.com"
                        className="text-primary hover:underline break-all"
                      >
                        mikekwamecoffie@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Project Consultation",
              desc: "Discuss your construction needs and get expert advice",
              Icon: FiMessageCircle,
            },
            {
              title: "Request a Quote",
              desc: "Receive detailed, transparent pricing for your project",
              Icon: FiFileText,
            },
            {
              title: "Schedule a Visit",
              desc: "Book a site visit or office meeting to discuss details",
              Icon: FiCalendar,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-linear-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-primary/10 text-primary">
                <item.Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-fg">{item.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
