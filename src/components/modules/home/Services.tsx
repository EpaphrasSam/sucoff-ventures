"use client";

import * as React from "react";
import Image from "next/image";

const SERVICES = [
	{ title: "Road Construction", desc: "Durable roads and drainage built to standards." },
	{ title: "Building Construction", desc: "Residential, commercial and institutional builds." },
	{ title: "Civil Engineering", desc: "Infrastructure delivery with safety and precision." },
	{ title: "Project Management", desc: "End-to-end planning and delivery." },
];

export default function HomeServices() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h2 className="font-heading text-2xl md:text-3xl font-semibold">Our Services</h2>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{SERVICES.map((s) => (
					<div key={s.title} className="border border-border rounded-md p-5 bg-bg">
						<div className="relative h-12 w-12">
							<Image src="/image.png" alt="icon" fill className="object-cover rounded" />
						</div>
						<p className="mt-4 font-semibold">{s.title}</p>
						<p className="mt-1 text-sm text-muted">{s.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
