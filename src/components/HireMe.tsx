import { useState, type FormEvent } from "react";
import { Send, Copy, Check, MessageCircle } from "lucide-react";
import { discordProfile } from "../data/social";

interface FormData {
  name: string;
  discord: string;
  email: string;
  service: string;
  budget: string;
  description: string;
}

const serviceOptions = [
  "Thumbnail Design",
  "Minecraft Server Development",
  "Discord Services",
  "Performance Optimization",
  "Multiple Services",
  "Other",
];

const budgetOptions = [
  "Under $25",
  "$25 - $50",
  "$50 - $100",
  "$100 - $250",
  "$250+",
  "Let's discuss",
];

export default function HireMe() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    discord: "",
    email: "",
    service: "",
    budget: "",
    description: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.discord.trim()) newErrors.discord = "Discord username is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.description.trim()) newErrors.description = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // In production, you'd send this data to a backend or email service
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

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

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-light rounded-2xl p-12">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-400 mb-6">
              Thanks for reaching out! I'll get back to you as soon as possible.
              For faster response, feel free to message me directly on Discord.
            </p>
            <a
              href={discordProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-white font-medium"
            >
              <MessageCircle size={18} />
              Message on Discord
            </a>
          </div>
        </div>
      </section>
    );
  }

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
            Have a project in mind? Fill out the form below or reach out
            directly on Discord for the fastest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discord CTA - sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-light rounded-2xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">
                Prefer Discord?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Discord is my preferred way to communicate. Message me directly
                for the fastest response!
              </p>

              {/* Copy Discord username */}
              <button
                onClick={copyDiscord}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors mb-4 group"
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
                <p className="text-green-400 text-xs mb-4">
                  ✓ Username copied to clipboard!
                </p>
              )}

              <a
                href={discordProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium"
              >
                <MessageCircle size={18} />
                Open Discord Profile
              </a>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Response Time
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-300">
                      Discord: Usually within hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-sm text-gray-300">
                      Form: Within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="glass-light rounded-2xl p-8"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Discord */}
                <div>
                  <label
                    htmlFor="discord"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Discord Username *
                  </label>
                  <input
                    id="discord"
                    type="text"
                    value={formData.discord}
                    onChange={(e) => handleChange("discord", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.discord ? "border-red-500/50" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm`}
                    placeholder="yourname"
                  />
                  {errors.discord && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.discord}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm`}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.service ? "border-red-500/50" : "border-white/10"
                    } text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm appearance-none`}
                  >
                    <option value="" className="bg-surface-light">
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-surface-light"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-surface-light">
                      Select your budget range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-surface-light"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.description
                        ? "border-red-500/50"
                        : "border-white/10"
                    } text-white placeholder-gray-500 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-sm resize-none`}
                    placeholder="Tell me about your project, requirements, and any details that would help me understand what you need..."
                  />
                  {errors.description && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary mt-6 w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
