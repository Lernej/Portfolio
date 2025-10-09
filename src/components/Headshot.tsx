import img from "../assets/headshot.jpeg";
import { useState, useEffect } from "react";

const Headshot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        isVisible
          ? "flex cursor-pointer opacity-100 motion-preset-slide-left motion-duration-1000 flex-shrink-0 md:mr-20"
          : "opacity-0"
      }`}
    >
      <img
        draggable="false"
        src={img}
        className="flex-shrink-0 overflow-x-hidden h-100 max-w-full hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition duration-1000 hover:scale-110 rounded-full border-4 border-gray-600"
      ></img>
    </div>
  );
};

export default Headshot;
