"use client";

import * as React from "react";
import Image from "next/image";
import { team } from "@/constants/team";

export default function TeamGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Management Team</h1>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{team.map((m) => (
					<div key={m.name} className="border border-border rounded-md bg-bg overflow-hidden">
						<div className="relative h-48 w-full">
							<Image src={m.image} alt={m.name} fill className="object-cover" />
						</div>
						<div className="p-4">
							<p className="font-semibold">{m.name}</p>
							<p className="text-sm text-muted">{m.title}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
