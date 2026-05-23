import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "../animations/variants";

const stats = [
  { label: "Projects Completed",    value: "10+",  icon: "🚀" },
  { label: "Technologies Learned",  value: "20+",  icon: "⚡" },
  { label: "APIs Built",            value: "15+",  icon: "🔧" },
  { label: "GitHub Commits",        value: "500+", icon: "💻" },
];

const highlights = [
  "Full Stack Development",
  "REST APIs",
  "Scalable Systems",
  "Software Engineering",
  "Problem Solving",
  "Clean Architecture",
];

const whyMe = [
  { emoji: "🎯", title: "Clean Code Advocate",  desc: "Maintainable, readable, and well-documented code that scales." },
  { emoji: "⚡", title: "Fast Learner",          desc: "Quick to adopt new technologies in an ever-evolving landscape." },
  { emoji: "🤝", title: "Team Player",           desc: "Collaborative mindset with strong cross-functional communication." },
];

const StatCard = ({ stat }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5, scale: 1.03 }}
    className="glass-card gradient-border p-4 text-center cursor-default"
  >
    <div className="text-2xl mb-1">{stat.icon}</div>
    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
    <div className="text-slate-500 text-xs mt-0.5 leading-snug">{stat.label}</div>
  </motion.div>
);

const About = () => (
  /* Issue #1 — py-20 instead of py-24 to tighten top spacing  */
  /* Issue #10 — slightly different bg to separate sections     */
  <section id="about" className="py-20 relative bg-[#111827]/40">
    {/* Ambient */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="section-header mb-12"
      >
        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">Get To Know</p>
        {/* Issue #9 — tighter heading scale */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider" />
      </motion.div>

      {/* Issue #4 — 50/50 split (equal cols) */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* ── Left: Profile card ── */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="glass-card p-6 relative overflow-hidden h-full">
            {/* Corner glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, rgba(124,58,237,0.14), transparent)" }}
            />

            {/* Avatar row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30 flex-shrink-0">
                MN
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">M. Nataraj</h3>
                <p className="text-purple-400 text-sm font-medium">Full Stack Developer</p>
                <p className="text-slate-500 text-xs mt-0.5">CSE Student • India</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              I am a <span className="text-purple-400 font-medium">Computer Science Engineering</span> student
              passionate about Full Stack Development, backend systems, APIs, scalable applications, and modern
              web technologies. I enjoy building real-world software products with clean UI, optimized backend
              architecture, and responsive user experiences.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              My goal is to craft solutions that are not just functional but elegant — products that delight
              users and scale effortlessly under the hood.
            </p>

            {/* Highlights */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {highlights.map(h => <span key={h} className="tech-badge">{h}</span>)}
            </div>

            {/* Footer bar */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400 text-xs">Open to new opportunities</span>
              </div>
              <span className="text-slate-600 text-xs">📍 India</span>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Why me + Stats ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-5"
        >
          {/* Why me cards */}
          <motion.div variants={fadeInRight}>
            <h3 className="text-xl font-bold text-white mb-3">
              Why work with <span className="gradient-text">me?</span>
            </h3>
            <div className="flex flex-col gap-3">
              {whyMe.map(({ emoji, title, desc }) => (
                <div key={title} className="flex gap-3 items-start glass-card p-4">
                  <span className="text-xl flex-shrink-0">{emoji}</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{title}</p>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid — 2×2, compact */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
            {stats.map(stat => <StatCard key={stat.label} stat={stat} />)}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
