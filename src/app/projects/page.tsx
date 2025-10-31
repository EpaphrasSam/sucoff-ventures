"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import ProjectsIntro from "@/components/modules/projects/ProjectsIntro";
import ProjectsGrid from "@/components/modules/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="OUR PORTFOLIO"
        title="Projects That Define Excellence"
        subtitle="Showcasing our commitment to quality construction and infrastructure development across Ghana"
      />
      <ProjectsIntro />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
