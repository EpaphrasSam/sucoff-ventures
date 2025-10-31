"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/modules/home/Hero";
import HomeServices from "@/components/modules/home/Services";
import HomeProjectsPreview from "@/components/modules/home/ProjectsPreview";

export default function Home() {
  return (
    <div className="bg-bg text-fg">
      <Navbar />
      <main>
        <HomeHero />
        <HomeServices />
        <HomeProjectsPreview />
      </main>
      <Footer />
    </div>
  );
}
