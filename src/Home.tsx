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
  const [showAttributions, setShowAttributions] = useState(false);

  const focusElements = [
    <Button href="/about">Navigate to About Me</Button>,
    <Button href="/experience">Navigate to Experience</Button>,
    <Button href="/projects">Navigate to Projects</Button>,
    <Button href="/skills">Navigate to Skills</Button>,
  ];

  return (
    <>
      <div className="relative flex-col flex min-h-screen items-center justify-center">
        <Clouds className="absolute top-[5%] left-[2%] md:h-30"></Clouds>
        <Clouds className="absolute bottom-[5%] right-[2%] md:h-30"></Clouds>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row 2xl:gap-40">
          <Title></Title>

          <Headshot></Headshot>
        </div>

        <div className="flex flex-col items-center text-white absolute bottom-0 motion-preset-blink motion-duration-5000 ">
          <div>Scroll to navigate</div>
          <div>↓</div>
        </div>
      </div>

      <div className="h-full w-full relative flex flex-col items-center gap-20">
        <div className="absolute inset-0 z-20">
          <Waves></Waves>
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <StarsBackground />
        </div>

        <div className="instructions mt-[20%] flex flex-col justify-center items-center gap-3 z-50">
          <p className="text-white font-bold text-2xl text-center">
            🚀 Click the arrows to set the page for navigation 🚀
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
        <div className="h-8 text-white absolute overflow-clip bottom-0 left-0 right-0 opacity-50 bg-gray-800 z-50 flex items-center text-[5px] lg:text-[8px]">
          <div
            className="flex items-center justify-center ml-2 cursor-pointer"
            onClick={() => {
              setShowAttributions((prev) => !prev);
            }}
          >
            {!showAttributions
              ? "Click to show attributions"
              : "Click to hide attributions"}
          </div>
          {showAttributions && (
            <div className="flex flex-row">
              <div className="mt-[5px] ml-2 z-50 flex flex-col">
                <div>
                  Modified from{" "}
                  <a
                    href="https://www.figma.com/community/file/1166831539721848736?ref=svgrepo.com"
                    target="_blank"
                  >
                    Solar Icons
                  </a>{" "}
                  in CC Attribution License via{" "}
                  <a href="https://www.svgrepo.com/" target="_blank">
                    SVG Repo
                  </a>
                </div>
                <div>
                  Vectors and icons by{" "}
                  <a
                    href="http://www.kamaluddin.co.id/?ref=svgrepo.com"
                    target="_blank"
                  >
                    Emka
                  </a>{" "}
                  in CC Attribution License via{" "}
                  <a href="https://www.svgrepo.com/" target="_blank">
                    SVG Repo
                  </a>
                </div>
              </div>
              <div className="mt-[5px] ml-2 z-50 flex flex-col">
                <div>
                  Vectors and icons by{" "}
                  <a
                    href="https://www.figma.com/@thinkcly?ref=svgrepo.com"
                    target="_blank"
                  >
                    Konstantin Filatov
                  </a>{" "}
                  in CC Attribution License via{" "}
                  <a href="https://www.svgrepo.com/" target="_blank">
                    SVG Repo
                  </a>
                </div>
                <div>
                  Vectors and icons by{" "}
                  <a
                    href="https://github.com/joypixels/emojione?ref=svgrepo.com"
                    target="_blank"
                  >
                    Joypixels
                  </a>{" "}
                  in MIT License via{" "}
                  <a href="https://www.svgrepo.com/" target="_blank">
                    SVG Repo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
