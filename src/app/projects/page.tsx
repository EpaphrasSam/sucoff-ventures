"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProjectsGrid from "@/components/modules/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="OUR PORTFOLIO"
        title="Showcasing Construction Excellence"
        subtitle="Delivering quality infrastructure projects across Ghana with precision, innovation, and commitment to excellence"
      />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
