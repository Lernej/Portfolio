import Project from "./components/Project";
import slAIde from "./assets/slAIde.png";
import studyfinder from "./assets/studyfinder.png";
import statforge from "./assets/statforge.png";
import planet from "./assets/orbit.svg";
import { useState, useMemo } from "react";
import "./App.css";
import PopInDiv from "./components/PopInDiv";

const Projects = () => {
  const [currProject, setCurrProject] = useState(0);

  const handleRightArrow = () => {
    if (currProject != projectList.length - 1) {
      setCurrProject((prev) => prev + 1);
    } else {
      setCurrProject(0);
    }
  };

  const handleLeftArrow = () => {
    if (currProject != 0) {
      setCurrProject((prev) => prev - 1);
    } else {
      setCurrProject(projectList.length - 1);
    }
  };

  const projectList = [
    <Project
      title="slAIde"
      image={slAIde}
      description={`slAIde is a project I developed in a team of three during the
        KnightHacks hackathon. This project utilizes Google's ADK, A2A, React,
        Typescript, and Tailwind to produce slideshows/pdf documents based on
        the user's request. I worked on the slideshow generator agents and
        integrated it into the React front end. Click the image to check it
        out on Devpost!`}
      imageLink="https://devpost.com/software/slaide"
    />,
    <Project
      title="StudyFinder"
      image={studyfinder}
      description={`StudyFinder was my project for Shellhacks, which I developed independently. 
        I used React, Typescript, and CSS for the front end, and used Firebase/Firestore 
        for storing data and handling user authentication. This app allows users to create an account and post "Study Sessions," detailing
        the time, subject, and location for the session. Users could see any posted sessions for their subjects and choose to join them. Click the image to check it out on Devpost!`}
      imageLink="https://devpost.com/software/studyfinder-9yn8qp"
    />,
    <Project
      title="StatForge"
      image={statforge}
      description={`Statforge was the first project I made that utilized React.
        This site is meant to assist new Elden Ring players, allowing users to input their 
        character's stats and see weapons that they can use along with each weapon's scaling. Click the
        image to check it out on GitHub!
        `}
      imageLink="https://github.com/Lernej/StatForge/tree/main"
    />,
  ];

  const stars = useMemo(() => {
    return Array.from({ length: 300 }, (_, index) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      return (
        <div
          className="h-px w-px absolute bg-white rounded-full"
          key={index}
          style={{ left: `${left}%`, top: `${top}%` }}
        ></div>
      );
    });
  }, []);

  const dimensions = "h-100 w-80 md:h-120 md:w-100 lg:h-130 lg:w-110";

  return (
    <div className="min-h-screen relative overflow-clip pt-20 text-center flex items-center justify-center bg-black text-white">
      <div className="h-full">{stars}</div>

      <div className="rounded-full relative">
        <div className="planet absolute bottom-1/2 left-1/2 z-50 -translate-x-[50%] translate-y-[50%]h-20 w-20 rounded-full">
          <img draggable="false" src={planet}></img>
        </div>
        <PopInDiv direction="right" duration={500}>
          <div className="flex flex-col items-center gap-5 text-5xl font-bold oveflow-clip">
            My Projects
            <div className="flex flex-col items-center gap-5">
              <div className={`flex ${dimensions} overflow-hidden relative`}>
                {projectList.map((project, i) => (
                  <div
                    key={i}
                    style={{ translate: `${-100 * currProject}%` }}
                    className="transition-transform duration-1000"
                  >
                    {project}
                  </div>
                ))}
              </div>

              <div className="flex gap-30">
                <div
                  onClick={handleLeftArrow}
                  className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 active:duration-100 transition-colors duration-500 pt-1 pb-3 p-2 flex items-center justify-center rounded-4xl cursor-pointer"
                >
                  {"⇦"}
                </div>{" "}
                <div
                  onClick={handleRightArrow}
                  className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 active:duration-100 transition-colors duration-500 pt-1 pb-3 p-2 flex items-center justify-center rounded-4xl cursor-pointer"
                >
                  {"⇨"}
                </div>
              </div>
            </div>
          </div>
        </PopInDiv>
      </div>
    </div>
  );
};

export default Projects;
