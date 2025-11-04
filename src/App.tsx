import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="z-100 flex bg-gray-400 h-[3rem] w-full fixed justify-start items-center gap-10 pl-5 rounded-b-sm shadow-lg text-white font-medium top-0 right-0 left-0">
          <a href="/">
            {" "}
            <button className="rounded-3x1 p-1 cursor-pointer">Home</button>
          </a>
        </div>
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
