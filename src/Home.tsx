import Headshot from "./components/Headshot";
import Title from "./components/Title";
import Clouds from "./components/Clouds";
import Waves from "./components/Waves";
import sun from "./assets/sun.svg";
import Button from "./components/Button";

import SpaceCarousel from "./components/SpaceCarousel";
import { useState } from "react";
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars";

function Home() {
  const [focusElement, setFocusElement] = useState(0);

  const focusElements = [
    <Button href="/about">About Me</Button>,
    <Button href="/experience">Experience</Button>,
    <Button>Projects</Button>,
    <Button>Skills</Button>,
  ];

  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center">
        <Clouds className="absolute top-[5%] left-[2%] md:h-30"></Clouds>
        <Clouds className="absolute bottom-[5%] right-[2%] md:h-30"></Clouds>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <Title></Title>

          <Headshot></Headshot>
        </div>

        <div className="flex flex-col items-center text-white absolute bottom-5 motion-preset-blink motion-duration-5000 ">
          <div>Scroll to view more</div>
          <div>↓</div>
        </div>
      </div>

      <div className="h-full w-full relative flex flex-col items-center gap-30">
        <div className="absolute inset-0 z-20">
          <Waves></Waves>
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <StarsBackground />
        </div>

        <div className="instructions h-0 lg:mt-[25%] flex flex-col justify-center items-center gap-3 z-50">
          <p className="text-white font-bold text-2xl">
            🚀 Selected page for navigation 🚀
          </p>
          <div>{focusElements[focusElement]}</div>
        </div>

        <div className="ml-17 inline-block relative z-40 mb-25">
          <SpaceCarousel setFocusElement={setFocusElement}></SpaceCarousel>
          <img
            src={sun}
            draggable={false}
            className="absolute h-35 top-[41%] left-[41%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
