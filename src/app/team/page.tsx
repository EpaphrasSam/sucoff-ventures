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
        badge="OUR TEAM"
        title="Expert Leadership & Management"
        subtitle="Meet the experienced professionals driving excellence in construction and project delivery across Ghana"
      />
      <TeamGrid />
      <Footer />
    </>
  );
}
