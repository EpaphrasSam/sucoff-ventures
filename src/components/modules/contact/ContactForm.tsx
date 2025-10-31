"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: "road", label: "Road Construction" },
  { value: "building", label: "Building Construction" },
  { value: "civil", label: "Civil Engineering" },
  { value: "consultation", label: "Project Consultation" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:sticky lg:top-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-fg">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer your questions and help bring your construction project to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg mb-2">Quick Response</h3>
                    <p className="text-sm text-muted">
                      We respond to all inquiries within 24 hours on business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg mb-2">Free Consultation</h3>
                    <p className="text-sm text-muted">
                      Get expert advice and project assessment at no cost
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-fg mb-2">Detailed Quote</h3>
                    <p className="text-sm text-muted">
                      Receive transparent, itemized pricing for your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-fg">Message Sent!</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Thank you for contacting us. We'll review your message and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      {...register("name")}
                      label="Full Name"
                      placeholder="John Doe"
                      variant="bordered"
                      isInvalid={!!errors.name}
                      errorMessage={errors.name?.message}
                      classNames={{
                        inputWrapper: "border-slate-200 hover:border-primary",
                      }}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      {...register("email")}
                      type="email"
                      label="Email Address"
                      placeholder="john@example.com"
                      variant="bordered"
                      isInvalid={!!errors.email}
                      errorMessage={errors.email?.message}
                      classNames={{
                        inputWrapper: "border-slate-200 hover:border-primary",
                      }}
                    />

                    <Input
                      {...register("phone")}
                      type="tel"
                      label="Phone Number"
                      placeholder="+233 XX XXX XXXX"
                      variant="bordered"
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone?.message}
                      classNames={{
                        inputWrapper: "border-slate-200 hover:border-primary",
                      }}
                    />
                  </div>

                  <div>
                    <Select
                      {...register("projectType")}
                      label="Project Type"
                      placeholder="Select a project type"
                      variant="bordered"
                      isInvalid={!!errors.projectType}
                      errorMessage={errors.projectType?.message}
                      classNames={{
                        trigger: "border-slate-200 hover:border-primary",
                      }}
                    >
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      {...register("message")}
                      label="Project Details"
                      placeholder="Tell us about your construction project, timeline, budget, and any specific requirements..."
                      variant="bordered"
                      minRows={6}
                      isInvalid={!!errors.message}
                      errorMessage={errors.message?.message}
                      classNames={{
                        inputWrapper: "border-slate-200 hover:border-primary",
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full font-semibold"
                    endContent={!isSubmitting && <FiSend />}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
