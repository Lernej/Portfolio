import ufo from "../assets/skill-ufo.svg";
import "../App.css";
import { useState, useRef } from "react";

interface Props {
  className?: string;
  isPaused: boolean;
  description: string;
  skill: string;
  height: number;
}

const Skill = ({ className, isPaused, skill, description, height }: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  const randomDelay = useRef(Math.random() * -20);

  return (
    <div
      className={`left-0 ufo h-30 ${
        isPaused ? "paused" : ""
      } flex flex-col items-center absolute z-50${className}`}
      style={{
        bottom: `${height}%`,
        animationDelay: `${randomDelay.current}s`,
        animationDuration: `${Math.max(window.innerWidth / 100, 30)}s`,
      }}
    >
      <img src={ufo} className="h-full"></img>
      <div
        onClick={() => {
          setShowDescription((prev) => !prev);
        }}
        className="z-50 pointer-events-auto bg-gray-800 cursor-pointer px-3 py-1 rounded-3xl -mt-5 text-md shadow-2xl border-1 border-gray-950"
      >
        {skill}
      </div>
      <div></div>
      <div
        className={`${
          showDescription ? "opacity-100" : "opacity-0"
        } w-50 text-center bg-gray-600 p-2 mt-1 rounded-2xl text-sm transition-opacity duration-300 z-40`}
      >
        {description}
      </div>
    </div>
  );
};

export default Skill;
