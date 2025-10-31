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
        title="Modern Construction Equipment"
        subtitle="State-of-the-art machinery and tools ensuring efficiency, safety, and quality in every project"
      />
      <EquipmentGrid />
      <Footer />
    </>
  );
}
