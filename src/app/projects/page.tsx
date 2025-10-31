"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/modules/projects/ProjectsGrid";

export default function ProjectsPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<ProjectsGrid />
			</main>
			<Footer />
		</div>
	);
}
