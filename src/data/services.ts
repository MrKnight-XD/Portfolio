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
      "Get your Minecraft server up and running smoothly. From basic setup to plugin configuration and performance tweaks — I'll help you build a great server experience.",
    features: [
      "Server setup & configuration",
      "Plugin installation & setup",
      "Server optimization",
      "Basic troubleshooting",
      "Gameplay & server customization",
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
