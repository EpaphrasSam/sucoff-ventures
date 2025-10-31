"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ServicesIntro from "@/components/modules/services/ServicesIntro";
import ServicesList from "@/components/modules/services/ServicesList";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="OUR SERVICES"
        title="Comprehensive Construction Solutions"
        subtitle="Expert services in road construction, building projects, and civil engineering delivered with precision and excellence"
      />
      <ServicesIntro />
      <ServicesList />
      <Footer />
    </>
  );
}
