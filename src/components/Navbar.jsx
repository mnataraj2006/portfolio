import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowDownTray } from "react-icons/hi2";

const navLinks = [
  { label: "Home",           to: "hero" },
  { label: "About",          to: "about" },
  { label: "Skills",         to: "skills" },
  { label: "Projects",       to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact",        to: "contact" },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Desktop Navbar ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(15,23,42,0.90)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Full-width inner: Logo | Nav | CTA — true justify-between */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[70px]">

          {/* ── Logo (left) ── */}
          <Link to="hero" smooth duration={600} className="cursor-pointer flex-shrink-0">
            <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-purple-500/30">
                MN
              </div>
              <span className="font-bold text-base tracking-tight hidden sm:block">
                M.&nbsp;<span className="gradient-text">Nataraj</span>
              </span>
            </motion.div>
          </Link>

          {/* ── Nav links (center) ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth duration={600} offset={-75}
                spy
                onSetActive={() => setActiveSection(link.to)}
                className="cursor-pointer"
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  className={`px-3.5 py-1.5 rounded-lg text-[0.825rem] font-medium tracking-wide transition-all duration-200 block ${
                    activeSection === link.to
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* ── Resume + Hamburger (right) ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[0.825rem] font-semibold rounded-full text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-md shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-300"
            >
              <HiArrowDownTray size={13} />
              Resume
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={21} /> : <HiMenuAlt3 size={21} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Drawer ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 lg:top-[70px] left-0 right-0 z-40 bg-[rgba(15,23,42,0.97)] backdrop-blur-2xl border-b border-white/[0.06] lg:hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055 }}
                >
                  <Link
                    to={link.to}
                    smooth duration={600} offset={-75}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] text-sm font-medium transition-all cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.055 }}
                href="/resume.pdf"
                download
                className="mt-3 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold justify-center text-sm"
              >
                <HiArrowDownTray size={15} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
