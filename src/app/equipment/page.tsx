"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import EquipmentGrid from "@/components/modules/equipment/EquipmentGrid";

export default function EquipmentPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="PLANTS & EQUIPMENT"
        title="Modern Construction Machinery"
        subtitle="State-of-the-art equipment fleet ensuring efficiency and precision across all projects"
      />
      <EquipmentGrid />
      <Footer />
    </>
  );
}
