import ImageSlider from "./components/ImageSlider";
import shellHacks from "./assets/Shellhacks.png";
import knightHacks from "./assets/knighthacks.jpeg";
import PopInDiv from "./components/PopInDiv";
import ufo from "./assets/ufo.svg";
import "./App.css";
import { useState } from "react";
import bg from "./assets/experience_background.jpg";
import PillNav from "./components/PillNav";
import logo from "./assets/logo.jpg";

const Experience = () => {
  const imageList = [knightHacks, shellHacks];
  const captions = [
    "My team at Knighthacks",
    "My Kickstart group at Shellhacks",
  ];

  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen min-w-screen flex justify-center items-center relative"
    >
      <div className="mt-20 text-white flex flex-col gap-20 lg:gap-0 lg:flex-row">
        <div className="flex-2 bg-gray-900/70 p-10 rounded-xl 2xl mx-10">
          <PopInDiv duration={200} direction="right">
            <p className="text-7xl font-bold mb-5 text-center lg:text-5xl">
              My Experience
            </p>
            <div className="h-full flex flex-col text-center pl-10 pr-10 gap-10 flex-1">
              <div className="flex-1">
                <div>
                  <p className="text-left text-xl">
                    Throughout my time at UCF, I've had the opportunity to take
                    a variety of relevant classes and participate in CS related
                    clubs.
                  </p>
                </div>
                <div className="text-left">
                  <div className="font-bold text-4xl lg:text-3xl">
                    Relevant Coursework
                  </div>
                  <ul className="list-disc list-inside text-xl relative lg:text-sm">
                    <li>AP Computer Science Principles</li>
                    <li>AP Computer Science A</li>
                    <li>Calculus 1</li>
                    <li>Calculus 2</li>
                    <li>Calculus 3</li>
                    <li>Intro to Programming with C</li>
                    <div className="opacity-0 md:opacity-100 absolute z-20 h-20 w-20 right-15 top-[25%] lg:left-150">
                      <PopInDiv duration={200} direction="right">
                        <img
                          src={ufo}
                          className={` w-full h-full motion-preset-oscillate motion-duration-4000 cursor-pointer ${
                            isSpinning && "spin-once"
                          }`}
                          onClick={handleClick}
                        ></img>
                      </PopInDiv>
                    </div>
                  </ul>
                </div>
                <div className="text-left">
                  <div className="font-bold text-4xl lg:text-3xl">
                    Computer Science Clubs
                  </div>
                  <div className="list-disc list-inside flex flex-col pt-2">
                    <div className="">
                      <div className="text-3xl font-semibold">KnightHacks</div>
                      <div className="pl-5 flex flex-col gap-1 lg:text-sm">
                        <li>
                          KnightHacks is a student run software engineering club
                          at UCF. In the fall semester, I joined the club's
                          Kickstart Program, in which I was paired with a mentor
                          and 4 other club members. Through a series of weekly
                          meetings and events, we worked on projects and
                          improved our technical skills, learning how to use
                          tools like React, Tailwind, and Neetcode.
                        </li>
                        <li>
                          Through Knighthacks, I also had the opportunity to
                          participate in two hackathons! In September, I went
                          with several club members to FIU's ShellHacks, In
                          which I worked independently to develop my first
                          fullstack application. In October, the club hosted
                          KnightHacks, where I worked on my first group project.
                        </li>
                      </div>
                      <div className="text-3xl font-semibold">Hack@UCF</div>
                      <div className="pl-5 lg:text-sm">
                        <li>
                          A student-run Cybersecurity Club at UCF! In this club,
                          I've gained hands-on experience with tools in Windows
                          and Linux used by Cybersecurity Professionals. After
                          participating in its many GBMs and Workshops, I'm
                          confident I want to continue to learn more about Cyber
                          in the future.
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PopInDiv>
        </div>{" "}
        <div className="flex-1 flex flex-col items-center justify-center">
          <PopInDiv direction="left" duration={200}>
            <ImageSlider
              imageList={imageList}
              width="80"
              captionList={captions}
            />
          </PopInDiv>
        </div>
      </div>
    </div>
  );
};

export default Experience;
