export interface Project {
  id: string;
  title: string;
  category: "thumbnails" | "minecraft" | "discord" | "websites";
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    category: "websites",
    description:
      "A modern, responsive portfolio website built with clean design and smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "websites",
    link: "https://mrknightxd-portfolio.netlify.app/",
  },
  {
    id: "2",
    title: "Content Creator Thumbnails",
    category: "thumbnails",
    description:
      "Custom thumbnail designs for content creators, optimized for engagement and visual impact.",
    technologies: ["Graphic Design", "Typography", "Composition"],
    image: "thumbnails",
  },
  {
    id: "3",
    title: "Community Discord Server",
    category: "discord",
    description:
      "Complete Discord server setup for a gaming community with custom bots, verification system, and role management.",
    technologies: ["Server Setup", "Bot Configuration", "Permissions"],
    image: "discord",
  },
  {
    id: "4",
    title: "Discord Servers",
    category: "discord",
    description:
      "Multiple Discord server projects with custom structures, automation, and community features.",
    technologies: ["Server Management", "Automation", "Customization"],
    image: "discord",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "thumbnails", label: "Thumbnails" },
  { id: "minecraft", label: "Minecraft" },
  { id: "discord", label: "Discord" },
  { id: "websites", label: "Websites" },
] as const;
