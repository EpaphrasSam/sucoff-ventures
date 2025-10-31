"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/modules/home/Hero";
import Welcome from "@/components/modules/home/Welcome";
import HomeServices from "@/components/modules/home/Services";
import Expertise from "@/components/modules/home/Expertise";
import HomeProjectsPreview from "@/components/modules/home/ProjectsPreview";
import News from "@/components/modules/home/News";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <Welcome />
        <HomeServices />
        <Expertise />
        <HomeProjectsPreview />
        <News />
      </main>
      <Footer />
    </>
  );
}
