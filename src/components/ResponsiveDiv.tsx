import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

interface Props {
  className?: string;
}

const ResponsiveDiv = ({ className }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [key, setKey] = useState(0);

  console.log(width);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setKey((prev) => prev + 1);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Snowfall
        key={key}
        style={{
          position: "absolute",
          width: "95vw",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default ResponsiveDiv;
