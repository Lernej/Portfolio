import Project from "./components/Project";
import slAIde from "./assets/slAIde.png";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 text-center text-white">
      <div className="flex flex-col items-center gap-10 text-5xl font-bold">
        My Projects
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
        />
      </div>
    </div>
  );
};

export default Projects;
