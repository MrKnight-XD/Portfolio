import { Code, Palette, Zap, Users } from "lucide-react";

// EDIT THESE VALUES to update your statistics
const stats = [
  { icon: <Code size={22} />, value: "50+", label: "Projects Completed" },
  { icon: <Palette size={22} />, value: "4", label: "Services Offered" },
  { icon: <Zap size={22} />, value: "3+", label: "Years Experience" },
  { icon: <Users size={22} />, value: "30+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Subtle background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - About content */}
          <div>
            <div className="glass-light rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Creative Developer & Designer
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="text-primary-light font-medium">MrKnightXD</span> — a digital creator specializing in graphic design, Minecraft server development, and Discord community building. I've spent years honing my craft to deliver professional, high-quality solutions.
                </p>
                <p>
                  My approach is simple: understand the client's vision, execute with precision, and deliver beyond expectations. Every project I take on gets my full attention and commitment to quality.
                </p>
                <p>
                  Whether it's designing an eye-catching thumbnail that stops scrollers in their tracks, building a Minecraft server that handles hundreds of players, or setting up a Discord community from scratch — I bring the same level of dedication and expertise.
                </p>
              </div>

              {/* Why work with me */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Why Work With Me?
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Fast turnaround times",
                    "Clear communication",
                    "Quality guaranteed",
                    "Ongoing support",
                    "Fair pricing",
                    "Attention to detail",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary-light flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-light rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack / tools */}
            <div className="glass-light rounded-2xl p-6 mt-4">
              <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Photoshop",
                  "After Effects",
                  "Java",
                  "Paper/Spigot",
                  "Discord.js",
                  "MySQL",
                  "React",
                  "Tailwind CSS",
                  "Linux",
                  "Git",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-primary/30 hover:text-primary-light transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
