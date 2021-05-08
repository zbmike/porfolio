import { useRef } from "react";
import useWindowsSize from "./hooks/useWindowsSize";
import "./styles/app.css";

function App() {
  const { width: windowWidth } = useWindowsSize();
  const sliderRef = useRef();
  if (!windowWidth) return null;
  const handleClick = (e) => {
    sliderRef.current.style.left =
      (e.target.offsetLeft + (windowWidth - 1024) / 2 - 8 )+ "px";
  };

  return (
    <>
      <div
        className="animated-background"
        style={{ height: (windowWidth * 447) / 1920 }}
      ></div>
      <div className="textbox">
        <h1 className="myname">Michael He</h1>
        <h2 className="mydesc">
          Zealous, detail-oriented Software Engineer with a Graphic Design
          background and eye for design.
        </h2>
      </div>
      <div
        style={{
          height: 2000,
          width: "100%",
          backgroundColor: "#1c1c1c",
        }}
      >
        <div className="container">
          <div className="tabs">
            <button onClick={handleClick}>Introduction</button>
            <button onClick={handleClick}>Projects</button>
            <button onClick={handleClick}>Skills</button>
            <button onClick={handleClick}>Connect</button>
          </div>
          <div
            className="slider"
            ref={sliderRef}
            style={{ left: (windowWidth - 1024) / 2 - 8 }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
