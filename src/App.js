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
    sliderRef.current.style.left = e.target.offsetLeft + "px";
  };

  return (
    <>
      <div
        className="animated-logo"
        style={{ height: (windowWidth * 447) / 1920 }}
      ></div>
      <div className="title__textbox">
        <h1 className="heading-primary--main">
          <span>I'm </span>Michael He
        </h1>
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
            <button
              onClick={handleClick(0)}
              className={`${activeTab === 0 && "active-tab"}`}
            >
              Introduction
            </button>
            <button
              onClick={handleClick(1)}
              className={`${activeTab === 1 && "active-tab"}`}
            >
              Projects
            </button>
            <button
              onClick={handleClick(2)}
              className={`${activeTab === 2 && "active-tab"}`}
            >
              Skills
            </button>
            <button
              onClick={handleClick(3)}
              className={`${activeTab === 3 && "active-tab"}`}
            >
              Connect
            </button>
          </div>
          <div className="slider" ref={sliderRef}></div>
          <div style={{ display: "flex" }}>
            <div style={{ width: 400, margin: "30px 56px" }}>
              <div className="card">
                <div className="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                      32em
                    </span>
                  </h4>
                  <div className="card__details">
                    Pixel perfect clone of 500px, a photo sharing website. It is
                    a fully functional photo sharing website on both PC and
                    phones
                  </div>
                </div>
                <div className="card__side card__side--back">
                  <div className="card__back-tech">
                    <div className="card__cta">
                      <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Ruby on Rails</li>
                        <li>Amazon S3</li>
                      </ul>
                      <a
                        href="https://photo32em.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--white"
                      >
                        Live
                      </a>
                      <br />
                      <br />
                      <a
                        href="https://github.com/zbmike/32-em"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--white"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: 400, margin: "30px 56px" }}>
              <div className="card">
                <div className="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">
                      Traintris
                    </span>
                  </h4>
                  <div className="card__details">
                    The classic Tetris with a new 3D look and has the ability to
                    train itself as the user plays.
                  </div>
                </div>
                <div className="card__side card__side--back">
                  <div className="card__back-tech">
                    <div className="card__cta">
                      <ul>
                        <li>JavaScript</li>
                        <li>Three.js</li>
                        <li>Brain.js</li>
                      </ul>
                      <a
                        href="https://zbmike.dev/traintris/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--white"
                      >
                        Live
                      </a>
                      <br />
                      <br />
                      <a
                        href="https://github.com/zbmike/traintris"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--white"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
