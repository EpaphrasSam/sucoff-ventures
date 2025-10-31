"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Certs from "@/components/modules/certifications/Certs";

export default function CertificationsPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<Certs />
			</main>
			<Footer />
		</div>
	);
}
