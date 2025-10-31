"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetail from "@/components/modules/projects/ProjectDetail";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<ProjectDetail id={params.id} />
			</main>
			<Footer />
		</div>
	);
}
