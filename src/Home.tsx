import Headshot from "./components/Headshot";
import Title from "./components/Title";
import Clouds from "./components/Clouds";
import Waves from "./components/Waves";

import ResponsiveDiv from "./components/ResponsiveDiv";
import Button from "./components/Button";
import Mt from "./assets/mountain.svg?react";
import PopInDiv from "./components/PopInDiv";

function Home() {
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

      <div className="min-h-screen bg-gray-600 relative">
        <div className="absolute inset-0 z-50">
          <Waves></Waves>
        </div>

        <PopInDiv className="h-0 absolute flex w-full items-center justify-center text-center z-50 top-[40%]">
          <div className="text-white font-bold text-3xl motion-preset-pulse-sm motion-duration-5000">
            Select a button to navigate
          </div>
        </PopInDiv>

        <div className="absolute bottom-0 left-[3%] lg:left-[20%]">
          <div className="relative w-[90vw] lg:w-[60vw]">
            <PopInDiv className="">
              <Mt className="w-[90vw] lg:w-[60vw]"></Mt>
            </PopInDiv>

            <a href="/about">
              <Button className="bottom-[20%] left-[5%]">About Me</Button>
            </a>

            <Button className="bottom-[50%] left-[15%]">Projects</Button>
            <Button className="top-0 left-[50%] lg:left-[54%]">
              Experience
            </Button>
            <Button className="top-[35%] left-[75%] lg:left-[80%]">
              Skills
            </Button>
          </div>
        </div>

        <div className="z-0">
          <ResponsiveDiv />
        </div>
      </div>
    </>
  );
}

export default Home;
