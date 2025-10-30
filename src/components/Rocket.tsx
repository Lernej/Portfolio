import rocket from "../assets/rocket.svg";
import rocket2 from "../assets/rocket2.svg";
import rocket3 from "../assets/rocket3.svg";
import { useState, useEffect } from "react";
import "../App.css";

interface Props {
  className?: string;
}

const Rocket = ({ className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const rockets = [rocket, rocket2, rocket3];
  const [img, setImg] = useState(rocket);

  useEffect(() => {
    console.log("Rocket mounted");
    let currentRocket = 0;
    const interval = setInterval(() => {
      console.log("Rocket flying");

      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        if (currentRocket === 2) {
          currentRocket = 0;
        } else {
          currentRocket++;
        }
        setImg(rockets[currentRocket]);
      }, 5000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`size-15 absolute ${className}`}>
      <img
        src={img}
        className={`size-full opacity-0 ${
          isVisible && "opacity-100 rocket-fly"
        }`}
      ></img>
    </div>
  );
};

export default Rocket;
