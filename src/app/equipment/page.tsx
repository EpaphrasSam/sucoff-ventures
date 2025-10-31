"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EquipmentGrid from "@/components/modules/equipment/EquipmentGrid";

export default function EquipmentPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<EquipmentGrid />
			</main>
			<Footer />
		</div>
	);
}
