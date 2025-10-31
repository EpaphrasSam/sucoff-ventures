"use client";

import * as React from "react";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function ProjectDetail({ id }: { id: string }) {
	const project = projects.find((p) => p.id === id);
	if (!project) {
		return (
			<section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
				<p className="text-muted">Project not found.</p>
			</section>
		);
	}
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">{project.title}</h1>
			{project.location && (
				<p className="mt-1 text-sm text-muted">{project.location}</p>
			)}
			<div className="mt-8 border border-border rounded-md overflow-hidden bg-bg">
				<div className="relative h-72 w-full">
					<Image src={project.image} alt={project.title} fill className="object-cover" />
				</div>
				<div className="p-4 text-sm text-muted">
					<p>
						Scope: Placeholder description. Replace with detailed scope, materials, and outcomes once provided.
					</p>
				</div>
			</div>
		</section>
	);
}
