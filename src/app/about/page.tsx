"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import AboutOverview from "@/components/modules/about/Overview";
import MissionVision from "@/components/modules/about/MissionVision";
import Values from "@/components/modules/about/Values";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="ABOUT US"
        title="Building Ghana's Future"
        subtitle="Since 2015, delivering excellence in construction, infrastructure, and civil engineering across Ghana"
      />
      <AboutOverview />
      <MissionVision />
      <Values />
      <Footer />
    </>
  );
}
