"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import TeamGrid from "@/components/modules/team/TeamGrid";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="LEADERSHIP"
        title="Meet Our Expert Team"
        subtitle="Experienced professionals driving excellence in construction and project delivery"
      />
      <TeamGrid />
      <Footer />
    </>
  );
}
