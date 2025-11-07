import { useEffect, useState } from "react";

const Title = () => {
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
          ? "mt-20 text-center max-w-full select-none lg:motion-preset-slide-right motion-duration-1000 opacity-100 transition-opacity duration-500 z-30 md:text-left md:ml-10 lg:w-180"
          : "opacity-0"
      }`}
    >
      <h1 className="text-white font-bold text-3xl lg:text-6xl">Noah Lerner</h1>
      <h1 className="text-white font-bold text-2xl lg:text-4xl">
        CS Major at the University of Central Florida Burnett Honors College
      </h1>
    </div>
  );
};

export default Title;
