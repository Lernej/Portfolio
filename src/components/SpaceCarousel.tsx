import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import { useEffect, useRef } from "react";

import planet1 from "../assets/planet1.svg";
import planet2 from "../assets/planet2.svg";
import planet3 from "../assets/planet3.svg";
import planet4 from "../assets/planet4.svg";

interface Props {
  setFocusElement: (focusElement: number) => void;
}

const SpaceCarousel = ({ setFocusElement }: Props) => {
  const images = [planet1, planet2, planet3, planet4];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const imgs = carouselRef.current.querySelectorAll("img");
      imgs.forEach((img) => {
        img.setAttribute("draggable", "false");
        // optional: prevent dragstart event
        img.addEventListener("dragstart", (e) => e.preventDefault());
      });
    }
  }, []);

  return (
    <div ref={carouselRef} className="carousel no-drag">
      <FancyCarousel
        images={images}
        carouselRadius={150}
        centralImageRadius={0}
        setFocusElement={setFocusElement}
        borderHexColor={"FFFFFF"}
        navigationButtonBgColor="030712"
        peripheralImageRadius={50}
      />
    </div>
  );
};

export default SpaceCarousel;
