import ImageSlider from "./components/ImageSlider";
import grad from "./assets/graduation.png";
import senior from "./assets/senior.jpeg";
import engineering from "./assets/engineering.jpeg";
import PopInDiv from "./components/PopInDiv";
import Rocket from "./components/Rocket";
import moon from "./assets/moon.svg";
import bg from "./assets/about_background.jpg";

const About = () => {
  const imageList = [engineering, grad, senior];
  const captionList = [
    "First time at UCF's engineering building, admitted students day",
    "My family and I during High School Graduation",
    "My family and I during my Cross Country Senior Night Meet",
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      className="min-h-screen flex items-center justify-center lg:pt-0 relative overflow-clip"
    >
      <Rocket className="left-5 -bottom-20 opacity-0 lg:opacity-100" />
      <div className="text-image h-full text-white flex flex-col items-center  lg:flex-row justify-center">
        <div className="pl-10 pr-10 lg:pl-30 lg:pr-30">
          <PopInDiv duration={200} direction="right">
            <div className="h-full bg-gray-900/90 p-10 rounded-xl flex flex-col text-center items-center justify-center gap-10 flex-1 relative">
              <div className="size-25 absolute right-0 -top-10 motion-preset-wobble motion-duration-5000">
                <img
                  className="size-full opacity-0 lg:opacity-100"
                  src={moon}
                ></img>
              </div>
              <div>
                <p className="text-5xl  font-bold">Hi, I'm Noah!</p>
                <p className="text-left text-md xl:text-lg">
                  I'm a first year computer science student at the University of
                  Central Florida Burnett Honors College. I'm interested in
                  pursuing a career in Software Engineering, Artificial
                  Intelligence, or Cybersecurity.
                </p>
              </div>
              <div>
                <p className="text-3xl  font-bold">
                  Why did I choose to study Computer Science?
                </p>
                <p className="text-left text-md xl:text-lg">
                  Inspired by my love of video games, I’ve always been
                  fascinated by how software works. In high school, taking AP
                  Computer Science Principles and AP Computer Science A gave me
                  the chance to explore this interest. The excitement I felt
                  while working on projects in those classes confirmed that I
                  wanted to study CS in college.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  Some of my other interests!
                </p>
                <p className="text-left text-md xl:text-lg">
                  Outside of computer science, I love playing Magic: The
                  Gathering, distance running, working out, and playing video
                  games!
                </p>
              </div>
            </div>
          </PopInDiv>
        </div>

        <PopInDiv duration={200} direction="left">
          {" "}
          <div className="flex-2 p-10">
            <ImageSlider
              imageList={imageList}
              captionList={captionList}
              captionStyle="bg-gray-900/80 flex items-center justify-center p-2 h-15 rounded-2xl"
            />
          </div>
        </PopInDiv>
      </div>
    </div>
  );
};

export default About;
