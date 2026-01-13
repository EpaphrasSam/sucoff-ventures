"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ContactInfo from "@/components/modules/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="GET IN TOUCH"
        title="Let's Build Together"
        subtitle="Ready to start your next construction project? Contact us today for a consultation and quote"
      />
      <ContactInfo />
      <Footer />
    </>
  );
}
