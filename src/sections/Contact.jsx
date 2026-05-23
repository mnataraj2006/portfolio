import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "../animations/variants";

const EMAILJS_SERVICE = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const socialLinks = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/mnataraj2006", color: "hover:text-white" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mnataraj", color: "hover:text-blue-400" },
  { icon: FiMail, label: "Email", href: "mailto:mnataraj@example.com", color: "hover:text-purple-400" },
];

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    /* Issue #1/#10 — py-20 + alternate bg */
    <section id="contact" className="py-20 relative">
      {/* Ambient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">Let's Connect</p>
          {/* Issue #9 — tighter heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a tech conversation.
          </p>
        </motion.div>

        {/* Issue #8 — better 40/60 ratio instead of cramped 2/3 of 5-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 items-start">
          {/* Left — Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-5"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-2">Let's build something great together</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a project in mind, want to collaborate, or are looking for a skilled developer — my inbox is always open.
              </p>
            </div>

            <div className="glass-card p-6 flex flex-col gap-5">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Find me at</h4>
              {[
                { icon: FiMail, label: "Email", value: "mnataraj@example.com", href: "mailto:mnataraj@example.com" },
                { icon: FiGithub, label: "GitHub", value: "github.com/mnataraj2006", href: "https://github.com/mnataraj2006" },
                { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/mnataraj", href: "https://linkedin.com/in/mnataraj" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-slate-300 text-sm font-medium group-hover:text-purple-400 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 glass-card text-slate-400 ${color} border border-white/10 hover:border-purple-500/30 rounded-xl text-sm font-medium transition-all duration-300`}
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className=""
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Corner gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(124,58,237,0.12), transparent)" }}
              />

              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {/* Success / Error Banner */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-6"
                >
                  <FiCheck size={16} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm mb-6"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input ${errors.name ? "border-red-500/60 focus:border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input ${errors.email ? "border-red-500/60 focus:border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`form-input resize-none ${errors.message ? "border-red-500/60 focus:border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                  whileTap={{ scale: 0.97 }}
                  id="contact-submit"
                  className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
