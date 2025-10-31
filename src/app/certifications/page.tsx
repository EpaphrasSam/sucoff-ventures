"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import Certs from "@/components/modules/certifications/Certs";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="CERTIFICATIONS"
        title="Industry Recognition & Compliance"
        subtitle="Certified by the Ministry of Works and Housing for general building works and civil works in Ghana and beyond"
      />
      <Certs />
      <Footer />
    </>
  );
}
