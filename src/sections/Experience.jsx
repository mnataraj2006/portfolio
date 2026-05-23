import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { fadeInUp, fadeInLeft, staggerContainer, viewportConfig } from "../animations/variants";

/*
  Issue #7 — Replace sparse alternating zig-zag with a compact
  left-anchored timeline. Cards are tighter (gap-6), the line hugs
  the left, and no empty-spacer divs are needed.
*/

const Experience = () => (
  /* Issue #1/#10 — py-20 + alternate bg */
  <section id="experience" className="py-20 relative bg-[#111827]/40 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute left-0 top-1/3 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
    </div>

    <div className="max-w-4xl mx-auto px-6 lg:px-10">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-10"
      >
        <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">My Path</p>
        {/* Issue #9 — tightened heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Experience &amp; <span className="gradient-text">Journey</span>
        </h2>
        <div className="section-divider" />
        <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
          A timeline of my learning journey, key milestones, and technical growth.
        </p>
      </motion.div>

      {/* ── Compact left-anchored timeline ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="relative"
      >
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, #7c3aed, #06b6d4, rgba(6,182,212,0))" }}
        />

        <div className="flex flex-col gap-6 pl-12">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInLeft}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.4rem] top-5 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#0f172a] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass-card gradient-border p-5"
              >
                {/* Meta row */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-xl">{item.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold text-purple-400 border border-purple-500/30 bg-purple-500/10">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="tech-badge text-[0.68rem] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
