import Skill from "./components/Skill";
import { useState, useMemo, useEffect } from "react";
import sun from "./assets/skill-sun.svg";
import planet from "./assets/orbit.svg";
import planet2 from "./assets/orbit2.svg";
import planet3 from "./assets/orbit3.svg";
import satellite from "./assets/satellite.svg";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [orbitingPlanet, setOrbitingPlanet] = useState(planet);
  const [currentHeight, setCurrentHeight] = useState(150);

  const planets = [planet, planet2, planet3];
  const planetHeights = [150, 130, 250];

  const skills = ["Tools & Platforms", "Frameworks & Libraries", "Languages"];
  const descriptions = [
    "Node.js, PostgreSQL, Firebase, Supabase, Git, GitHub, Netlify, VS Code, REST APIs",
    "React, Unity, Express.js, Prisma, TailwindCSS, React Router, Framer Motion",
    "Java, C, Python, HTML, CSS, JavaScript, TypeScript, C#",
  ];
  const heights = [20, 40, 60];

  const stars = useMemo(() => {
    return Array.from({ length: 300 }, (_, index) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      return (
        <div
          className="h-px w-px absolute bg-white rounded-full"
          key={index}
          style={{ left: `${left}%`, top: `${top}%` }}
        ></div>
      );
    });
  }, []);

  useEffect(() => {
    let currentPlanet = 0;

    const interval = setInterval(() => {
      if (currentPlanet != planets.length - 1) {
        currentPlanet++;
      } else {
        currentPlanet = 0;
      }

      setOrbitingPlanet(planets[currentPlanet]);
      setCurrentHeight(planetHeights[currentPlanet]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-clip">
      <div className="h-150 absolute -left-75">
        <img
          src={sun}
          className="h-full"
          draggable="false"
          style={{
            WebkitTouchCallout: "none",
          }}
        ></img>
      </div>

      <div className="absolute left-2/3 top-1/3 h-30 motion-preset-oscillate motion-duration-5000 z-15">
        <img
          className="h-full rotate-30"
          src={satellite}
          draggable="false"
          style={{
            WebkitTouchCallout: "none",
          }}
        ></img>
      </div>

      <div
        className={`absolute planet2 left-1/4 top-1/2 z-10 -translate-x-[50%] rounded-full`}
        style={{ height: `${currentHeight}px` }}
      >
        <img draggable="false" className="h-full" src={orbitingPlanet}></img>
      </div>

      <div className="h-full">{stars}</div>
      <div className="absolute top-20 z-20 font-bold text-2xl motion-preset-blink motion-duration-5000">
        Click on a UFO to see all skills!
      </div>
      {skills.map((_, i) => (
        <div key={i}>
          <Skill
            isPaused={isPaused}
            description={descriptions[i]}
            skill={skills[i]}
            height={heights[i]}
          />
        </div>
      ))}
      <button
        onClick={() => {
          setIsPaused((prev) => !prev);
        }}
        className="absolute bottom-0 bg-gradient-to-r from-gray-400 to-gray-800 px-5 py-3 mb-2 rounded-2xl cursor-pointer hover:bg-gray-800"
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default Skills;
