import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const quickLinks = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];
const scrollTargets = { Home: "hero", About: "about", Skills: "skills", Projects: "projects", Certifications: "certifications", Contact: "contact" };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
                MN
              </div>
              <span className="font-bold text-lg">
                M. <span className="gradient-text">Nataraj</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer building scalable web applications and impactful digital experiences.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                { icon: FiGithub, href: "https://github.com/mnataraj2006", label: "GitHub" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/mnataraj", label: "LinkedIn" },
                { icon: FiMail, href: "mailto:mnataraj@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={scrollTargets[link]}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-slate-500 hover:text-purple-400 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <FiMail size={14} className="text-purple-400 flex-shrink-0" />
                mnataraj@example.com
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <FiGithub size={14} className="text-purple-400 flex-shrink-0" />
                github.com/mnataraj2006
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <FiLinkedin size={14} className="text-purple-400 flex-shrink-0" />
                linkedin.com/in/mnataraj
              </li>
              <li className="mt-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            © {year} M. Nataraj. Made with
            <FiHeart size={12} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
          <p className="text-slate-600 text-xs">
            Designed & Built by{" "}
            <span className="gradient-text font-medium">M. Nataraj</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
