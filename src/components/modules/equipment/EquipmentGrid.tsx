"use client";

import * as React from "react";
import Image from "next/image";
import { equipment } from "@/constants/equipment";

export default function EquipmentGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
			<h1 className="font-heading text-3xl font-semibold">Plants & Equipment</h1>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{equipment.map((e) => (
					<div key={e.name} className="border border-border rounded-md overflow-hidden bg-bg">
						<div className="relative h-40 w-full">
							<Image src={e.image} alt={e.name} fill className="object-cover" />
						</div>
						<div className="p-4">
							<p className="font-semibold">{e.name}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
