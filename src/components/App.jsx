import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import useScrollReveal from "../hooks/useScrollReveal";
import useMobileHover from "../hooks/useMobileHover";
import CustomCursor from "./CustomCursor";
import ScrollToTop from "./ScrollToTop";
import ParticleBackground from "./ParticleBackground";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useScrollReveal();
  useMobileHover();

  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main className="tree-layout">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <CustomCursor />
    </div>
  );
}


