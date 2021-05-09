import { useRef, useState } from "react";
import useWindowsSize from "./hooks/useWindowsSize";
import "./styles/index.css";

function App() {
  const { width: windowWidth } = useWindowsSize();
  const sliderRef = useRef();
  const [activeTab, setActiveTab] = useState(0);
  if (!windowWidth) return null;
  const handleClick = (e) => {
    sliderRef.current.style.left =
      e.target.offsetLeft+ "px";
  };

  return (
    <>
      <div
        className="animated-logo"
        style={{ height: (windowWidth * 447) / 1920 }}
      ></div>
      <div className="title__textbox">
        <h1 className="heading-primary--main">Michael He</h1>
        <h2 className="heading-primary--sub">
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
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
