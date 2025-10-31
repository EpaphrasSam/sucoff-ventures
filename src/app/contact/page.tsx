"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/modules/contact/ContactForm";

export default function ContactPage() {
	return (
		<div className="bg-bg text-fg">
			<Navbar />
			<main>
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
}
