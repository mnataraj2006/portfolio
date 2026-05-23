import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { HiArrowDownTray } from "react-icons/hi2";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../animations/variants";

const TYPING_STRINGS = [
  "Full Stack Developer",
  "Software Engineering Student",
  "React.js & Node.js Developer",
  "API & Backend Engineer",
  "Problem Solver",
];

const useTypingEffect = (strings, typingSpeed = 80, erasingSpeed = 40, pause = 2000) => {
  const [text,      setText]      = useState("");
  const [strIndex,  setStrIndex]  = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    let timeout;
    if (!isErasing && charIndex < current.length) {
      timeout = setTimeout(() => { setText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, typingSpeed);
    } else if (!isErasing && charIndex === current.length) {
      timeout = setTimeout(() => setIsErasing(true), pause);
    } else if (isErasing && charIndex > 0) {
      timeout = setTimeout(() => { setText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, erasingSpeed);
    } else if (isErasing && charIndex === 0) {
      setIsErasing(false);
      setStrIndex(s => (s + 1) % strings.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, strIndex, strings, typingSpeed, erasingSpeed, pause]);

  return text;
};

const Hero = () => {
  const typedText = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="hero"
      /* Issue #1 — keep min-h-screen for hero only, controlled by pt/pb instead */
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blob 1 — top-left purple */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        {/* Blob 2 — bottom-right cyan */}
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], rotate: [80, 0, 80] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
        {/* Issue #3 — tighter gap, proper items-center */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Block ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 max-w-2xl"
          >
            {/* Availability badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-purple-500/30 bg-purple-500/10 text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Issue #3 — reduced from text-7xl to text-5xl lg:text-6xl, tighter heading */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">M. Nataraj</span>
              </h1>
            </motion.div>

            {/* Typing effect */}
            <motion.div variants={fadeInUp} className="h-8 flex items-center">
              <span className="text-lg lg:text-xl text-slate-400 font-medium typing-cursor">
                {typedText}
              </span>
            </motion.div>

            {/* Tagline — issue #9: tighter font scale */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-base lg:text-[1.05rem] leading-relaxed max-w-lg"
            >
              Building{" "}
              <span className="text-purple-400 font-medium">scalable web applications</span>,
              REST APIs, and impactful software solutions using modern technologies.
            </motion.p>

            {/* CTA Buttons — issue #3: consistent gap */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
              <Link to="projects" smooth duration={600} offset={-75}>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                  id="hero-view-projects"
                >
                  View Projects
                </motion.button>
              </Link>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
                id="hero-download-resume"
              >
                <HiArrowDownTray size={15} />
                Download Resume
              </motion.a>

              <Link to="contact" smooth duration={600} offset={-75}>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                  id="hero-contact-me"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-1">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub,   href: "https://github.com/mnataraj2006",        label: "GitHub"   },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/mnataraj",        label: "LinkedIn" },
                  { icon: FiMail,     href: "mailto:mnataraj@example.com",             label: "Email"    },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.18, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Visual ── */}
          {/* Issue #3 — reduced avatar circle from w-80 to w-60 lg:w-72 */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Spinning rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-18px] rounded-full border border-dashed border-purple-500/25"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-36px] rounded-full border border-dashed border-cyan-500/15"
              />

              {/* Main circle — reduced size */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-60 h-60 lg:w-72 lg:h-72 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.35) 100%)",
                  boxShadow: "0 0 50px rgba(124,58,237,0.35), 0 0 90px rgba(6,182,212,0.15)",
                }}
              >
                <div className="absolute inset-[3px] rounded-full bg-[#0f172a] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/60 to-cyan-900/60 flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl font-bold gradient-text">MN</span>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-3 -right-3 glass-card px-2.5 py-1.5 text-[0.7rem] font-semibold text-emerald-400 border border-emerald-500/30 shadow-lg whitespace-nowrap"
                >
                  💻 Full Stack Dev
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-3 -left-3 glass-card px-2.5 py-1.5 text-[0.7rem] font-semibold text-purple-400 border border-purple-500/30 shadow-lg whitespace-nowrap"
                >
                  ⚡ React & Node.js
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute top-1/2 -translate-y-1/2 -right-8 glass-card px-2.5 py-1.5 text-[0.7rem] font-semibold text-cyan-400 border border-cyan-500/30 shadow-lg whitespace-nowrap"
                >
                  🔥 Open to Work
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-1.5 mt-14"
        >
          <span className="text-slate-600 text-[0.7rem] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown size={14} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
