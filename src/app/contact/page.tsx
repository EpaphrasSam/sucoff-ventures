"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/modules/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="CONTACT US"
        title="Let's Build Together"
        subtitle="Have a project in mind? Get in touch and let's bring your vision to life with professional construction services"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
