export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "thumbnails",
    icon: "palette",
    title: "Thumbnail Design",
    description:
      "Eye-catching YouTube thumbnails designed to maximize click-through rates and stand out in the feed.",
    features: [
      "High-quality YouTube thumbnails",
      "Eye-catching compositions",
      "Gaming & content creator focused",
      "Fast turnaround",
      "Unlimited revisions",
    ],
    cta: "Hire Me",
  },
  {
    id: "minecraft",
    icon: "server",
    title: "Minecraft Server Development",
    description:
      "Complete Minecraft server solutions — from initial setup to advanced plugin configuration and performance optimization.",
    features: [
      "Server setup & configuration",
      "Plugin configuration",
      "Performance optimization",
      "Troubleshooting & debugging",
      "Custom server systems",
    ],
    cta: "Hire Me",
  },
  {
    id: "discord",
    icon: "message-circle",
    title: "Discord Services",
    description:
      "Professional Discord server setup and management to build and grow your community effectively.",
    features: [
      "Server setup & structure",
      "Permissions & roles",
      "Bots and automation",
      "Server customization",
      "Community management",
    ],
    cta: "Hire Me",
  },
];
