"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Button } from "@heroui/react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    console.log("Contact form submitted", values);
    reset();
  };

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center mb-6">
                <FiMail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-fg">Email Us</h3>
              <a
                href="mailto:mikekwamecoffie@yahoo.com"
                className="text-muted hover:text-primary transition-colors text-lg"
              >
                mikekwamecoffie@yahoo.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-orange-50 p-8 rounded-2xl border border-accent/20 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-700 flex items-center justify-center mb-6">
                <FiPhone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-fg">Call Us</h3>
              <a
                href="tel:+233244564256"
                className="text-muted hover:text-primary transition-colors text-lg"
              >
                +233 (0) 24 456 4256
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/5 to-blue-50 p-8 rounded-2xl border border-blue-600/20 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                <FiMapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-fg">Visit Us</h3>
              <p className="text-muted text-lg">
                Goaso-Dechem
                <br />
                Ahafo Region, Ghana
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700/5 to-slate-50 p-8 rounded-2xl border border-slate-700/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-700/10 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-fg">Working Hours</h3>
                  <p className="text-muted">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 8:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl"
            >
              <div className="space-y-6">
                <Input
                  label="Full Name"
                  variant="bordered"
                  size="lg"
                  {...register("name")}
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border-slate-300 hover:border-primary",
                  }}
                />
                <Input
                  label="Email Address"
                  type="email"
                  variant="bordered"
                  size="lg"
                  {...register("email")}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border-slate-300 hover:border-primary",
                  }}
                />
                <Input
                  label="Phone Number (Optional)"
                  variant="bordered"
                  size="lg"
                  {...register("phone")}
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border-slate-300 hover:border-primary",
                  }}
                />
                <Textarea
                  label="Your Message"
                  variant="bordered"
                  minRows={6}
                  size="lg"
                  {...register("message")}
                  isInvalid={!!errors.message}
                  errorMessage={errors.message?.message}
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border-slate-300 hover:border-primary",
                  }}
                />
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg"
                  endContent={!isSubmitting && <FiSend />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
