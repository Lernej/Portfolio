import ImageSlider from "./components/ImageSlider";
import grad from "./assets/graduation.png";
import senior from "./assets/senior.jpeg";
import engineering from "./assets/engineering.jpeg";
import PopInDiv from "./components/PopInDiv";

const Experience = () => {
  return (
    <div className="pt-20 min-h-screen flex justify-center lg:pt-30">
      <div className="text-image h-full bg-gray-950 text-white flex flex-col lg:flex-row">
        <PopInDiv duration={200} direction="right">
          <div className="h-full flex flex-col text-center pl-10 pr-10 gap-10 flex-1">
            <div>
              <p className="text-7xl font-bold mb-5">My Experience</p>
              <p className="text-left text-xl">
                Throughout my time at UCF, I've had the opportunity to take a
                variety of relevant classes and participate in CS related clubs.
              </p>
            </div>
            <div className="text-left">
              <div className="font-bold text-4xl">Relevant Coursework</div>
              <ul className="list-disc list-inside text-xl">
                <li>AP Computer Science Principles</li>
                <li>AP Computer Science A</li>
                <li>Calculus 1</li>
                <li>Calculus 2</li>
                <li>Intro to programming with C</li>
              </ul>
            </div>
            <div className="text-left">
              <div className="font-bold text-4xl">Computer Science Clubs</div>
              <div className="list-disc list-inside flex flex-col pt-2">
                <div className="">
                  <div className="text-3xl font-semibold">Hack@UCF</div>
                  <div className="pl-5">
                    <li>
                      A student-run Cybersecurity Club at UCF! In this club,
                      I've gained hands-on experience with tools in Windows and
                      Linux used by Cybersecurity Professionals. After
                      participating in its man GBMs and Workshops, I'm confident
                      I want to continue to learn more about Cyber in the
                      future.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopInDiv>
      </div>
    </div>
  );
};

export default Experience;
