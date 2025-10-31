"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProductsGrid from "@/components/modules/products/ProductsGrid";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="OUR CAPABILITIES"
        title="Products & Services"
        subtitle="Comprehensive construction solutions backed by modern equipment and expertise"
      />
      <ProductsGrid />
      <Footer />
    </>
  );
}

