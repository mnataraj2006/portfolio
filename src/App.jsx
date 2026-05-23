import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

/* Issue #10 — Thin gradient divider between sections */
const SectionSep = () => <div className="section-sep" />;

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-x-hidden">
      {/* ── Global UI ── */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <BackToTop />

      {/* ── Page Sections ── */}
      <main>
        <Hero />
        <SectionSep />
        <About />
        <SectionSep />
        <Skills />
        <SectionSep />
        <Projects />
        <SectionSep />
        <Experience />
        <SectionSep />
        <Certifications />
        <SectionSep />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
