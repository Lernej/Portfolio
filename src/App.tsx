import "./App.css";
import Headshot from "./components/Headshot";
import Title from "./components/Title";
import Clouds from "./components/Clouds";
import Waves from "./components/Waves";
import Mountain from "./components/Mountain";

function App() {
  return (
    <>
      <div className="z-100 flex bg-gray-400 h-12 w-full fixed justify-start items-center gap-10 pl-5 rounded-b-sm shadow-lg text-white font-medium top-0 right-0 left-0">
        <button className="rounded-3x1 p-1 cursor-pointer">Home</button>
      </div>

      <div className="relative flex min-h-screen items-center justify-center">
        <Clouds className="absolute top-[5%] left-[2%] md:h-30"></Clouds>
        <Clouds className="absolute bottom-[5%] right-[2%] md:h-30"></Clouds>

        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          <Title></Title>

          <Headshot></Headshot>
        </div>

        <div className="flex flex-col items-center text-white absolute bottom-5 motion-preset-blink motion-duration-5000">
          <div>Scroll to view more</div>
          <div>↓</div>
        </div>
      </div>

      <div className="min-h-screen bg-blue-200 relative">
        <Waves></Waves>
      </div>
    </>
  );
}

export default App;
