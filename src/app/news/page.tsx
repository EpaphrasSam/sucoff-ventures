"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/common/PageHeader";
import NewsList from "@/components/modules/news/NewsList";

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="LATEST UPDATES"
        title="News & Events"
        subtitle="Stay informed about our latest projects, achievements, and company updates"
      />
      <NewsList />
      <Footer />
    </>
  );
}
