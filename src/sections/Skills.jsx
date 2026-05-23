import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";
import { fadeInUp, staggerContainer, viewportConfig } from "../animations/variants";

const SKILL_ICONS = {
  "HTML5": "🌐", "CSS3": "🎨", "JavaScript": "⚡", "React.js": "⚛️", "Tailwind CSS": "💨",
  "Node.js": "🟢", "Express.js": "🚂", "REST APIs": "🔌",
  "Python": "🐍", "C++": "⚙️", "SQL": "🗄️",
  "MongoDB": "🍃", "MySQL": "🐬",
  "Git": "📦", "Docker": "🐳", "Postman": "📮", "Power BI": "📊",
};

const SkillBar = ({ name, level, icon, delay }) => {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      whileHover={{ scale: 1.02, x: 3 }}
      className="glass-card gradient-border p-3.5 flex items-center gap-3 group cursor-default"
    >
      <span className="text-xl flex-shrink-0">{icon || "💡"}</span>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-semibold text-white truncate">{name}</span>
          <span className="text-xs text-purple-400 font-medium ml-2">{level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-bar-fill"
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: delay * 0.08 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = Object.keys(skills);
  const [active,   setActive]   = useState(categories[0]);

  return (
    /* Issue #1 — reduced py, issue #10 — alternate bg */
    <section id="skills" className="py-20 relative">
      {/* Ambient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        {/* Issue #5 — clear vertical rhythm: Header → Tabs → Grid → Badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-8"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">My Arsenal</p>
          {/* Issue #9 — tightened heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-250 ${
                active === cat
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white border-transparent shadow-md shadow-purple-500/25"
                  : "border-white/10 text-slate-400 hover:border-purple-500/40 hover:text-purple-400 bg-white/[0.02]"
              }`}
              id={`skill-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Skills grid ── */}
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
        >
          {skills[active].map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={SKILL_ICONS[skill.name]}
              delay={i}
            />
          ))}
        </motion.div>

        {/* ── All-technologies badge cloud ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <p className="text-slate-600 text-xs mb-4">All technologies I'm proficient in</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {Object.values(skills).flat().map(skill => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.06, y: -2 }}
                className="tech-badge cursor-default"
              >
                {SKILL_ICONS[skill.name]} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
