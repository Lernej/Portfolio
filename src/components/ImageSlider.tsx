import { useState } from "react";

interface Props {
  imageList: string[];
  captionList?: string[];
  width?: string;
  captionStyle?: string;
}

const ImageSlider = ({ imageList, captionList, captionStyle }: Props) => {
  const images = imageList;
  const captions = captionList;
  const [image, setImage] = useState(0);
  const [caption, setCaption] = useState(0);

  const handleRightArrow = () => {
    if (image != images.length - 1) {
      setImage((prev) => prev + 1);
      setCaption((prev) => prev + 1);
    } else {
      setImage(0);
      setCaption(0);
    }
  };

  const handleLeftArrow = () => {
    if (image != 0) {
      setImage((prev) => prev - 1);
      setCaption((prev) => prev - 1);
    } else {
      setImage(images.length - 1);
      setCaption(images.length - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className={`bg-cover bg-center h-130 w-90 relative rounded-xl overflow-hidden`}
      >
        <div
          onClick={handleRightArrow}
          className="absolute text-white font-bold right-0 h-full flex flex-col justify-center cursor-pointer z-10 hover:bg-black/20 transition-colors duration-200"
        >
          {"⇨"}
        </div>

        <div
          onClick={handleLeftArrow}
          className="absolute text-white font-bold left-0  h-full flex flex-col justify-center cursor-pointer z-10 hover:bg-black/20 transition-colors duration-200"
        >
          {"⇦"}
        </div>
        <div className="h-full w-full shrink-0 grow-0 flex overflow-hidden">
          {images.map((url) => (
            <img
              src={url}
              key={url}
              style={{ translate: `${-100 * image}%` }}
              className="shrink-0 grow-0 w-auto h-auto transition-transform duration-500"
            ></img>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 absolute bottom-1 left-[50%] -translate-x-[50%] bg-black/100 w-8 h-2 rounded-xl">
          {images.map((_, buttonIndex) => (
            <div
              key={buttonIndex}
              className={`h-1 w-1 bg-white/50 rounded-4xl cursor-pointer ${
                buttonIndex == image && "bg-white/100"
              }`}
              onClick={() => setImage(buttonIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div className={`text-center h-10 ${captionStyle ? captionStyle : ""}`}>
        {captions ? captions[caption] : ""}
      </div>
    </div>
  );
};

export default ImageSlider;
