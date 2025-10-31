"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@heroui/react";

const PROJECTS = [
	{ title: "Berekum East Road", location: "Bono Region", image: "/image.png" },
	{ title: "Memano Primary School", location: "Jaman South", image: "/image.png" },
	{ title: "Bepong Primary School", location: "Kwawu South", image: "/image.png" },
	{ title: "Odumase AstroTurf", location: "Bono Region", image: "/image.png" },
];

export default function HomeProjectsPreview() {
	const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false });

	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<div className="flex items-end justify-between gap-4">
				<h2 className="font-heading text-2xl md:text-3xl font-semibold">Featured Projects</h2>
				<Button asChild variant="bordered" size="sm">
					<a href="/projects">View all</a>
				</Button>
			</div>
			<div className="mt-8 overflow-hidden" ref={emblaRef}>
				<div className="flex gap-6">
					{PROJECTS.map((p) => (
						<div key={p.title} className="min-w-0 basis-full sm:basis-1/2 lg:basis-1/3">
							<div className="border border-border rounded-md overflow-hidden bg-bg">
								<div className="relative h-48 w-full">
									<Image src={p.image} alt={p.title} fill className="object-cover" />
								</div>
								<div className="p-4">
									<p className="font-semibold">{p.title}</p>
									<p className="text-sm text-muted">{p.location}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
