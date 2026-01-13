export type Project = {
  id: string;
  title: string;
  location?: string;
  year?: number;
  image: string;
  images: string[];
  category?: string;
};

export const projects: Project[] = [
  {
    id: "berekum-road",
    title: "Berekum East Road Construction",
    location: "Bono Region",
    year: 2022,
    image: "/projects/berekum-road/1.png",
    images: [
      "/projects/berekum-road/1.png",
      "/projects/berekum-road/2.png",
      "/projects/berekum-road/3.png",
      "/projects/berekum-road/4.png",
    ],
    category: "Road Construction",
  },
  {
    id: "memano-primary",
    title: "Memano Primary School",
    location: "Jaman South District",
    year: 2021,
    image: "/projects/memano-school/1.png",
    images: [
      "/projects/memano-school/1.png",
      "/projects/memano-school/2.png",
      "/projects/memano-school/3.png",
    ],
    category: "Educational Facility",
  },
  {
    id: "bepong-primary",
    title: "Bepong Primary School",
    location: "Kwawu South District",
    year: 2020,
    image: "/projects/bepong-school/1.png",
    images: ["/projects/bepong-school/1.png"],
    category: "Educational Facility",
  },
  {
    id: "odumase-astroturf",
    title: "Odumase AstroTurf Facility",
    location: "Bono Region",
    year: 2023,
    image: "/projects/odumase-astroturf/1.png",
    images: [
      "/projects/odumase-astroturf/1.png",
      "/projects/odumase-astroturf/2.png",
      "/projects/odumase-astroturf/3.png",
    ],
    category: "Special Project",
  },
];
