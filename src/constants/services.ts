export type Service = {
	id: string;
	title: string;
	description: string;
	image: string;
};

export const services: Service[] = [
	{ id: "plastic", title: "Plastic Pollution Management", description: "Comprehensive solutions for plastic waste reduction, recycling, and sustainable environmental practices.", image: "/projects/odumase-astroturf/2.png" },
	{ id: "building", title: "Building Construction", description: "Residential, commercial and institutional builds.", image: "/projects/memano-school/2.png" },
	{ id: "civil", title: "Civil Engineering", description: "Infrastructure delivery with safety and precision, including road construction and drainage systems.", image: "/projects/berekum-road/2.png" },
	{ id: "pm", title: "Project Management", description: "End-to-end planning and delivery.", image: "/projects/bepong-school/1.png" },
];
