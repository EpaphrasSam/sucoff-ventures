"use client";

import * as React from "react";

const VALUES = [
	"Precision in delivery",
	"Innovation in every project",
	"Collaboration at every level",
	"Safety and sustainability",
	"Client satisfaction",
];

export default function Values() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
			<h2 className="font-heading text-2xl font-semibold">Our Values</h2>
			<ul className="mt-4 grid gap-3 sm:grid-cols-2">
				{VALUES.map((v) => (
					<li key={v} className="border border-border rounded-md p-4 text-sm text-muted bg-bg">{v}</li>
				))}
			</ul>
		</section>
	);
}
