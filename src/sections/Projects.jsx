import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";
import { fadeInUp, staggerContainer, viewportConfig } from "../animations/variants";

const ProjectCard = ({ project }) => {
  return (
    /* Issue #6 — h-full ensures all cards in the row stretch equally */
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group relative glass-card overflow-hidden rounded-2xl flex flex-col h-full"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color.replace('/20', '')} opacity-80`} />

      {/* Project Image Placeholder */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
      >
        {/* Grid lines overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Icon */}
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-7xl z-10 drop-shadow-2xl"
        >
          {project.icon}
        </motion.span>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 backdrop-blur-sm z-20"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
            id={`project-github-${project.id}`}
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}, rgba(6,182,212,0.8))` }}
            id={`project-live-${project.id}`}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </motion.div>
      </div>

      {/* Content — Issue #6: flex-col + justify-between keeps buttons at bottom */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        {/* Top block: title + description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-base">{project.icon}</span>
            <h3 className="font-bold text-white text-base leading-snug group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
          </div>
          {/* Issue #6 — description in its own block, min-h so shorter ones don't collapse */}
          <p className="text-slate-400 text-sm leading-relaxed min-h-[72px]">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map(tech => (
              <span key={tech} className="tech-badge text-[0.68rem] px-2 py-0.5">{tech}</span>
            ))}
          </div>
        </div>

        {/* Buttons — always at bottom via justify-between on parent */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:border-purple-500/50 hover:text-purple-400 text-sm font-medium transition-all duration-300"
          >
            <FiGithub size={14} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:opacity-90"
            style={{ background: `linear-gradient(135deg, #7c3aed, ${project.accent})` }}
          >
            <FiExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    /* Issue #10 — alternate bg; issue #1 — reduced py */
    <section id="projects" className="py-20 relative bg-[#111827]/30">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">My Work</p>
          {/* Issue #9 — reduced heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          /* Issue #6 — items-stretch so all cards in each row grow equally */
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/mnataraj2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/60 font-semibold transition-all duration-300"
            id="view-all-github"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
