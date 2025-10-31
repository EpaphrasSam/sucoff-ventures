export type Project = {
	id: string;
	title: string;
	location?: string;
	year?: string;
	image: string;
	category?: "completed" | "ongoing" | "special";
};

export const projects: Project[] = [
	{ id: "berekum-road", title: "Berekum East Road", location: "Bono Region", image: "/image.png", category: "completed" },
	{ id: "memano-primary", title: "Memano Primary School", location: "Jaman South", image: "/image.png", category: "completed" },
	{ id: "bepong-primary", title: "Bepong Primary School", location: "Kwawu South", image: "/image.png", category: "completed" },
	{ id: "odumase-astroturf", title: "Odumase AstroTurf", location: "Bono Region", image: "/image.png", category: "special" },
];
