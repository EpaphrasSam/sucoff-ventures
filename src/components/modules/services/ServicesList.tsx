"use client";

import * as React from "react";
import Image from "next/image";
import { services } from "@/constants/services";

export default function ServicesList() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Our Services</h1>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{services.map((s) => (
					<div key={s.id} className="border border-border rounded-md p-6 bg-bg transition hover:shadow-md hover:-translate-y-0.5">
						<div className="relative h-32 w-full overflow-hidden rounded">
							<Image src={s.image} alt={s.title} fill className="object-cover" />
						</div>
						<h3 className="mt-4 font-semibold">{s.title}</h3>
						<p className="mt-1 text-sm text-muted">{s.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
