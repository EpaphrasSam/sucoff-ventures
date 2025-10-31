"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesList from "@/components/modules/services/ServicesList";

export default function ServicesPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<ServicesList />
			</main>
			<Footer />
		</div>
	);
}
