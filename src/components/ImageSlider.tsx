import grad from "../assets/graduation.png";
import senior from "../assets/senior.jpeg";
import engineering from "../assets/engineering.jpeg";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [grad, senior, engineering];
  const [image, setImage] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const currentImage = images[image];

  const handleRightArrow = () => {
    if (image != 2) {
      setImage((prev) => prev + 1);
    } else {
      setImage(0);
    }
  };

  const handleLeftArrow = () => {
    if (image != 0) {
      setImage((prev) => prev - 1);
    } else {
      setImage(2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="bg-cover bg-center h-100 w-100 relative rounded-xl"
        style={{ backgroundImage: `url(${currentImage})` }}
        key={currentImage}
      >
        <div
          onClick={handleRightArrow}
          className="absolute text-white font-bold right-0 bg-black h-full flex flex-col justify-center cursor-pointer opacity-50"
        >
          {">"}
        </div>
        <div
          onClick={handleLeftArrow}
          className="absolute text-white font-bold left-0 bg-black h-full flex flex-col justify-center cursor-pointer opacity-50"
        >
          {"<"}
        </div>

        <div className="flex items-center justify-center gap-1 absolute bottom-1 left-[50%] -translate-x-[50%] bg-black/50 w-8 h-2 rounded-xl">
          <div
            className={`h-1 w-1 bg-white/50 rounded-4xl ${
              image == 0 && "bg-white/100"
            }`}
          ></div>
          <div
            className={`h-1 w-1 bg-white/50 rounded-4xl ${
              image == 1 && "bg-white/100"
            }`}
          ></div>
          <div
            className={`h-1 w-1 bg-white/50 rounded-4xl ${
              image == 2 && "bg-white/100"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
