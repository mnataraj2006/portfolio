import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { certifications } from "../data/certifications";
import { fadeInUp, staggerContainer, scaleIn, viewportConfig } from "../animations/variants";

const Certifications = () => {
  return (
    /* Issue #1/#10 — py-20 + alternate bg */
    <section id="certifications" className="py-20 relative">
      {/* Ambient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">Credentials</p>
          {/* Issue #9 — tighter heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">My <span className="gradient-text">Certifications</span></h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card gradient-border p-6 flex flex-col group cursor-default"
            >
              {/* Icon Row */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                  <FiAward size={22} className="text-white" />
                </div>
                <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-purple-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5 flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                {cert.platform}
              </p>

              {/* CTA */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-cyan-400 transition-colors group/link"
                id={`cert-view-${cert.id}`}
              >
                <FiExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
