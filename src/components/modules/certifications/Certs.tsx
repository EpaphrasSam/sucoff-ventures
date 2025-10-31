"use client";

import * as React from "react";
import Image from "next/image";
import { certifications } from "@/constants/certifications";

export default function Certs() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Certifications</h1>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{certifications.map((c) => (
					<div key={c.title} className="border border-border rounded-md overflow-hidden bg-bg">
						<div className="relative h-40 w-full">
							<Image src={c.image} alt={c.title} fill className="object-cover" />
						</div>
						<div className="p-4">
							<p className="font-semibold">{c.title}</p>
							<p className="text-sm text-muted">{c.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
