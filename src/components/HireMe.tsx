import { MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";
import { discordProfile } from "../data/social";

export default function HireMe() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(discordProfile.username);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = discordProfile.username;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-4">
            Hire Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? The best way to reach me is through Discord.
          </p>
        </div>

        {/* Discord CTA Card */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-light rounded-2xl p-8 lg:p-12 text-center">
            {/* Discord Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#5865F2]">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Contact Me on Discord
            </h3>
            <p className="text-gray-400 mb-6">
              Discord is the fastest way to reach me. Send me a message and let's discuss your project!
            </p>

            {/* Copy Discord username */}
            <button
              onClick={copyDiscord}
              className="w-full max-w-xs mx-auto flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors mb-6 group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary-light" />
                <span className="text-white text-sm font-medium">
                  {discordProfile.username}
                </span>
              </div>
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy
                  size={16}
                  className="text-gray-400 group-hover:text-primary-light transition-colors"
                />
              )}
            </button>
            {copied && (
              <p className="text-green-400 text-sm mb-4">
                ✓ Username copied to clipboard!
              </p>
            )}

            {/* Main CTA Button */}
            <a
              href={discordProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
            >
              <MessageCircle size={20} />
              Contact Me on Discord
            </a>

            {/* Response time */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-400">
                  Usually responds within a few hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
