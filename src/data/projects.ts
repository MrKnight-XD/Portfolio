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
    title: "Gaming YouTube Channel Thumbnails",
    category: "thumbnails",
    description:
      "Custom thumbnail designs for a gaming YouTube channel, optimized for high CTR and visual impact.",
    technologies: ["Photoshop", "After Effects", "Typography"],
    image: "thumbnails",
  },
  {
    id: "2",
    title: "Survival Network Server",
    category: "minecraft",
    description:
      "Full Minecraft survival network with custom plugins, economy system, and optimized performance for 500+ players.",
    technologies: ["Paper", "Java", "MySQL", "Redis"],
    image: "minecraft",
  },
  {
    id: "3",
    title: "Community Discord Server",
    category: "discord",
    description:
      "Complete Discord server setup for a gaming community with custom bots, verification system, and role management.",
    technologies: ["Discord.js", "Bot Setup", "Permissions"],
    image: "discord",
  },
  {
    id: "4",
    title: "SkyBlock Server",
    category: "minecraft",
    description:
      "Custom SkyBlock server with unique island generation, challenges, and a fully integrated economy.",
    technologies: ["Spigot", "Custom Plugins", "MySQL"],
    image: "minecraft",
  },
  {
    id: "5",
    title: "Content Creator Thumbnails",
    category: "thumbnails",
    description:
      "Series of thumbnails for a tech review channel with clean, modern designs and bold typography.",
    technologies: ["Photoshop", "Color Theory", "Composition"],
    image: "thumbnails",
  },
  {
    id: "6",
    title: "Esports Discord Hub",
    category: "discord",
    description:
      "Professional Discord server for an esports organization with tournament management and team coordination.",
    technologies: ["Custom Bots", "Webhooks", "Automation"],
    image: "discord",
  },
  {
    id: "7",
    title: "Portfolio Website",
    category: "websites",
    description:
      "Modern, responsive portfolio website with smooth animations and clean design.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    image: "websites",
  },
  {
    id: "8",
    title: "Minigames Server",
    category: "minecraft",
    description:
      "Multi-game Minecraft server featuring BedWars, SkyWars, and custom minigames with optimized performance.",
    technologies: ["Paper", "BungeeCord", "Custom Plugins"],
    image: "minecraft",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "thumbnails", label: "Thumbnails" },
  { id: "minecraft", label: "Minecraft" },
  { id: "discord", label: "Discord" },
  { id: "websites", label: "Websites" },
] as const;
