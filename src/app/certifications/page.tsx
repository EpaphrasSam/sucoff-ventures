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
        badge="CREDENTIALS"
        title="Certifications & Accreditations"
        subtitle="Officially recognized and certified by Ghana's Ministry of Works and Housing"
      />
      <Certs />
      <Footer />
    </>
  );
}
