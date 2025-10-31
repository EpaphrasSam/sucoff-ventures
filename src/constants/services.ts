export type Service = {
	id: string;
	title: string;
	description: string;
	image: string;
};

export const services: Service[] = [
	{ id: "road", title: "Road Construction", description: "Durable roads and drainage built to standards.", image: "/image.png" },
	{ id: "building", title: "Building Construction", description: "Residential, commercial and institutional builds.", image: "/image.png" },
	{ id: "civil", title: "Civil Engineering", description: "Infrastructure delivery with safety and precision.", image: "/image.png" },
	{ id: "pm", title: "Project Management", description: "End-to-end planning and delivery.", image: "/image.png" },
];
