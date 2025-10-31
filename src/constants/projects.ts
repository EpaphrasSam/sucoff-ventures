export type Project = {
  id: string;
  title: string;
  location?: string;
  year?: number;
  image: string;
  category?: string;
  status?: "completed" | "ongoing";
};

export const projects: Project[] = [
  {
    id: "berekum-road",
    title: "Berekum East Road Construction",
    location: "Bono Region",
    year: 2022,
    image: "/image.png",
    category: "Road Construction",
    status: "completed",
  },
  {
    id: "memano-primary",
    title: "Memano Primary School",
    location: "Jaman South District",
    year: 2021,
    image: "/image.png",
    category: "Educational Facility",
    status: "completed",
  },
  {
    id: "bepong-primary",
    title: "Bepong Primary School",
    location: "Kwawu South District",
    year: 2020,
    image: "/image.png",
    category: "Educational Facility",
    status: "completed",
  },
  {
    id: "odumase-astroturf",
    title: "Odumase AstroTurf Facility",
    location: "Bono Region",
    year: 2023,
    image: "/image.png",
    category: "Special Project",
    status: "completed",
  },
  {
    id: "goaso-municipal",
    title: "Goaso Municipal Assembly Block",
    location: "Ahafo Region",
    year: 2024,
    image: "/image.png",
    category: "Institutional Building",
    status: "ongoing",
  },
  {
    id: "bosome-drainage",
    title: "Bosome Freho Drainage System",
    location: "Ashanti Region",
    year: 2024,
    image: "/image.png",
    category: "Civil Works",
    status: "ongoing",
  },
];
