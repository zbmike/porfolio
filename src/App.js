import { useRef, useState } from "react";
import useWindowsSize from "./hooks/useWindowsSize";
import "./styles/index.css";

function App() {
  const { width: windowWidth } = useWindowsSize();
  const sliderRef = useRef();
  const [activeTab, setActiveTab] = useState(0);
  if (!windowWidth) return null;
  const handleClick = (tab) => (e) => {
    setActiveTab(tab);
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
        <h1 className="heading-primary--main"><span>I'm </span>Michael He</h1>
        <h2 className="heading-primary--sub">
          A zealous, detail-oriented Software Engineer with a Graphic Design
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
            <button onClick={handleClick(0)} className={`${activeTab === 0 && 'active-tab'}`}>Introduction</button>
            <button onClick={handleClick(1)} className={`${activeTab === 1 && 'active-tab'}`}>Projects</button>
            <button onClick={handleClick(2)} className={`${activeTab === 2 && 'active-tab'}`}>Skills</button>
            <button onClick={handleClick(3)} className={`${activeTab === 3 && 'active-tab'}`}>Connect</button>
          </div>
          <div
            className="slider"
            ref={sliderRef}
          ></div>
          <div>
            <div className="card">
              TEXT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
