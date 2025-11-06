import Cloud from "../assets/cloud.svg";
import { useState, useEffect } from "react";

interface Props {
  className?: string;
}

const Clouds = ({ className = "" }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img
        src={Cloud}
        className={`${
          isVisible
            ? `${className} motion-preset-fade absolute fill-gray-300 z-10 h-20 lg:h-40`
            : "opacity-0"
        }`}
      ></img>
    </div>
  );
};

export default Clouds;
