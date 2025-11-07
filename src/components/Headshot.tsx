import img from "../assets/headshot.jpeg";
import { useState, useEffect } from "react";
import ln from "../assets/linkedin.svg";
import gh from "../assets/github.svg";
import rm from "../assets/resume.svg";

const Headshot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-col justify-center items-center flex-shrink-0">
      <div
        className={`${
          isVisible
            ? "items-center justify-center flex cursor-pointer opacity-100 flex-shrink-0 lg:motion-preset-slide-left lg:motion-duration-1000 transition-opacity duration-500"
            : "opacity-0 mx-auto"
        }`}
      >
        <img
          draggable="false"
          src={img}
          className="overflow-x-hidden flex-shrink-0 h-80 max-w-full hover:shadow-[0_0_20px_rgba(255,255,255,1)] hover:mb-10 transition-all duration-1000  hover:scale-110 rounded-full border-4 border-gray-600 md:h-100"
        ></img>
      </div>
      <div className="flex text-white items-center justify-center mt-3 gap-10">
        <a
          href="https://linkedin.com/in/noah-lerner-59b651384"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-10 w-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300">
            <img src={ln} className="h-full" />
          </div>
        </a>

        <a
          href="https://github.com/lernej"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-10 w-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300">
            <img src={gh} className="h-full" />
          </div>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="h-10 w-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300">
            <img src={rm} className="h-full" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Headshot;
