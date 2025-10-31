"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamGrid from "@/components/modules/team/TeamGrid";

export default function TeamPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<TeamGrid />
			</main>
			<Footer />
		</div>
	);
}
