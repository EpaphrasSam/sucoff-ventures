"use client";

import * as React from "react";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { Link } from "@heroui/react";

export default function ProjectsGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Projects</h1>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((p) => (
					<Link key={p.id} href={`/projects/${p.id}`} className="block border border-border rounded-md overflow-hidden bg-bg transition hover:shadow-md hover:-translate-y-0.5">
						<div className="relative h-48 w-full">
							<Image src={p.image} alt={p.title} fill className="object-cover" />
						</div>
						<div className="p-4">
							<p className="font-semibold">{p.title}</p>
							{p.location && <p className="text-sm text-muted">{p.location}</p>}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
