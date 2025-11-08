import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import PillNav from "./components/PillNav";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";

function App() {
  function NavbarDisplay() {
    const [visibleNav, setVisibleNav] = useState(false);

    useEffect(() => {
      setVisibleNav(false);

      const timeout = setTimeout(() => {
        setVisibleNav(true);
      }, 50);

      return () => clearTimeout(timeout);
    }, [location]);

    return (
      <div
        className={`min-w-screen flex items-center justify-center opacity-0 transition-opacity duration-100 ${
          visibleNav && "opacity-100"
        }`}
      >
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Experience", href: "/experience" },
            { label: "Projects", href: "/projects" },
            { label: "Skills", href: "/skills" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#9c9b9a"
          pillColor="#cfccc6"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <div className="min-w-screen flex items-center justify-center"></div>
        <NavbarDisplay />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
