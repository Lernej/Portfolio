import bg from "./assets/skills-background.jpg";
import Skill from "./components/Skill";
import { useState, useMemo } from "react";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);

  const skills = [
    "Tools & Technologies",
    "Frameworks & Libraries",
    "Languages",
  ];
  const descriptions = [
    "Gemini API, Google ADK, Git, GitHub",
    "React",
    "Python, C, JavaScript, TypeScript, Java",
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-clip">
      <div className="h-full">{stars}</div>
      <div className="absolute top-20 font-bold text-2xl motion-preset-blink motion-duration-5000">
        Click on a UFO to see all skills!
      </div>
      {skills.map((_, i) => (
        <Skill
          isPaused={isPaused}
          description={descriptions[i]}
          skill={skills[i]}
          height={heights[i]}
        />
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
