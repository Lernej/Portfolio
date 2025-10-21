import ImageSlider from "./components/ImageSlider";

const About = () => {
  return (
    <div className="text-image mt-[20rem] h-[calc(100vh-20rem)] bg-gray-950 text-white flex flex-col items-center lg:flex-row justify-center lg:mt-[3rem] lg:h-[calc(100vh-3)]">
      <div className="flex flex-col text-center items-center p-10 gap-10 flex-1">
        <div>
          <p className="text-7xl font-bold">Hi, I'm Noah!</p>
          <p className="text-left text-xl">
            I'm a first year computer science student at the University of
            Central Florida Burnett Honors College. I'm interested in pursuing a
            career in Software Engineering, Artificial Intelligence, or
            Cybersecurity.
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">
            Why did I choose to study Computer Science?
          </p>
          <p className="text-left text-xl">
            Sparked by my love of video games, I’ve always been fascinated by
            how software works. In high school, taking AP Computer Science
            Principles and AP Computer Science A gave me the chance to explore
            this interest. The excitement I felt while working on projects in
            those classes confirmed that I wanted to study CS in college.
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">Some of my other interests!</p>
          <p className="text-left text-xl">
            Outside of computer science, I love playing Magic: The Gathering,
            distance running, working out, and playing video games!
          </p>
        </div>
      </div>
      <div className="flex-1">
        <ImageSlider />
      </div>
    </div>
  );
};

export default About;
