"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutOverview from "@/components/modules/about/Overview";
import MissionVision from "@/components/modules/about/MissionVision";
import Values from "@/components/modules/about/Values";

export default function AboutPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<AboutOverview />
				<MissionVision />
				<Values />
			</main>
			<Footer />
		</div>
	);
}
