"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import Overview from "@/components/modules/about/Overview";
import MissionVision from "@/components/modules/about/MissionVision";
import Values from "@/components/modules/about/Values";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="OUR STORY"
        title="About Sucoff Ventures"
        subtitle="Building a legacy of excellence in construction since 2015"
      />
      <Overview />
      <MissionVision />
      <Values />
      <Footer />
    </>
  );
}
