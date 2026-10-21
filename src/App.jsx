import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <Navbar />
      <main className="pt-[76px]">
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
