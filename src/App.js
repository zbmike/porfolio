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
          {activeTab === 0 && (
            <div className="intro">
              <div className="intro--text">
                <h2>About Me</h2>
                <p>
                  Hi, thanks for visiting my site! I’m a former graphic designer
                  turned software engineer currently focused on building
                  seamless full-stack projects. I graduated from Columbia
                  University with a Computer Science Degree before enrolling at
                  App Academy, a rigorous, fullstack web development program
                  where I furthered my expertise in React, Redux, Rails, Ruby,
                  JavaScript, and the MERN stack. I love creating frontends with
                  stunning visual effects yet also enjoy building efficient
                  backends. Check out my projects and my skills sections for
                  more details!
                </p>
              </div>
              <img src="./images/portrait.jpg" alt="Zhiyuan He" />
            </div>
          )}
          {activeTab === 1 && (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
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
                      Pixel perfect clone of 500px, a photo sharing website. It
                      is a fully functional photo sharing website on both PC and
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
                      The classic Tetris with a new 3D look and has the ability
                      to train itself as the user plays.
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
              <div style={{ width: 400, margin: "30px 56px" }}>
                <div className="card">
                  <div className="card__side card__side--front">
                    <div class="card__picture card__picture--3">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--3">
                        SlowmoVideo
                      </span>
                    </h4>
                    <div className="card__details">
                      A MERN project to get hands-on experience of React hooks. Also
                      a part of experiment of providing small business solution.
                    </div>
                  </div>
                  <div className="card__side card__side--back">
                    <div className="card__back-tech">
                      <div className="card__cta">
                        <ul>
                          <li>MongoDB</li>
                          <li>Express</li>
                          <li>React</li>
                          <li>Node.js</li>
                          <li>Amazon S3</li>
                        </ul>
                        <a
                          href="https://slowmovideo-frontend.web.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn--white"
                        >
                          Live
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://github.com/zbmike/SlowMoVideosShowcaseFront"
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
                    <div class="card__picture card__picture--4">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--4">
                        Instagram Clone
                      </span>
                    </h4>
                    <div className="card__details">
                      A 3-day project aim to quickly try Tailwind CSS and
                      Firebase. Also a small test for my React skill.
                    </div>
                  </div>
                  <div className="card__side card__side--back">
                    <div className="card__back-tech">
                      <div className="card__cta">
                        <ul>
                          <li>React</li>
                          <li>Tailwind CSS</li>
                          <li>Firebase</li>
                        </ul>
                        <a
                          href="https://instagram-clone-zbmike.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn--white"
                        >
                          Live
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://github.com/zbmike/instagram-clone"
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
                    <div class="card__picture card__picture--5">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--5">
                        My Portfolio
                      </span>
                    </h4>
                    <div className="card__details">
                      A project to to renew my portfolio site and graphic design skill. 
                      Also to try SCSS with React
                    </div>
                  </div>
                  <div className="card__side card__side--back">
                    <div className="card__back-tech">
                      <div className="card__cta">
                        <ul>
                          <li>React</li>
                          <li>SCSS</li>
                          <li>Photoshop</li>
                        </ul>
                        <a
                          href="https://zbmike.dev/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn--white"
                        >
                          Live
                        </a>
                        <br />
                        <br />
                        <a
                          href="https://github.com/zbmike/porfolio"
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
          )}
          {activeTab === 2 && (
            <>
              <br />
              <ul className="skills">
                <li className="style1">
                  <span
                    className="devicon-ruby-plain-wordmark"
                    style={{ fontSize: 120, margin: (1000 - 600) / 10 }}
                    title="Ruby"
                  ></span>
                </li>
                <li className="style2">
                  <span
                    className="devicon-javascript-plain"
                    style={{ fontSize: 120, margin: (1000 - 600) / 10 }}
                    title="JavaScript"
                  ></span>
                </li>
                <li className="style3">
                  <span
                    className="devicon-rails-plain-wordmark"
                    style={{ fontSize: 120, margin: (1000 - 600) / 10 }}
                    title="Ruby on Rails"
                  ></span>
                </li>
                <li className="style4">
                  <span
                    className="devicon-nodejs-plain"
                    style={{ fontSize: 120, margin: (1000 - 600) / 10 }}
                    title="Node.js"
                  ></span>
                </li>
                <li className="style5">
                  <span
                    className="devicon-react-original"
                    style={{ fontSize: 120, margin: (1000 - 600) / 10 }}
                    title="React"
                  ></span>
                </li>
              </ul>
              <ul className="skills">
                <li className="style2">
                  <span
                    className="devicon-express-original"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="Express.js"
                  ></span>
                </li>
                <li className="style3">
                  <span
                    className="devicon-mongodb-plain"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="MongoDB"
                  ></span>
                </li>
                <li className="style4">
                  <span
                    className="devicon-html5-plain-wordmark"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="HTML5"
                  ></span>
                </li>
                <li className="style5">
                  <span
                    className="devicon-css3-plain-wordmark"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="CSS3"
                  ></span>
                </li>
                <li className="style1">
                  <span
                    className="devicon-python-plain-wordmark"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="Python"
                  ></span>
                </li>
                <li className="style2">
                  <span
                    className="devicon-angularjs-plain"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="C"
                  ></span>
                </li>
                <li className="style3">
                  <span
                    className="devicon-photoshop-plain"
                    style={{ fontSize: 80, margin: (1000 - 560) / 14 }}
                    title="Photoshop"
                  ></span>
                </li>
              </ul>
              <h1 className="skill-text">And More... </h1>
            </>
          )}
          {activeTab === 3 && (
            <section className="main special">
              <header className="major">
                <h1>Connect</h1>
                <p>
                  Thanks for taking the time to go through my work! <br />
                  To learn more about me, check out my{" "}
                  <a href="assets/Zhiyuan_He_Resume.pdf">
                    <strong>resume</strong>
                  </a>{" "}
                  and/or connect with me on{" "}
                  <a href="https://www.linkedin.com/in/zhiyuan-he-mike/">
                    <strong>Linkedin</strong>
                  </a>
                  ,{" "}
                  <a href="https://angel.co/zhiyuan-he-2/">
                    <strong>Angel List</strong>
                  </a>{" "}
                  and{" "}
                  <a href="https://github.com/zbmike/">
                    <strong>GitHub</strong>
                  </a>.<br/>
                   You can also email me at{" "}
                  <a href="mailto:zbmanhe@gmail.com">
                    <strong>zbmanhe@gmail.com</strong>
                  </a>
                  .
                </p>
              </header>
            </section>
          )}
        </div>
      </div>
      <footer id="footer">
        <section>
          <h2>Michael He on the way to his dream.</h2>
        </section>
        <div class="full-width">
          <ul class="icons">
            <li>
              <a
                href="https://angel.co/zhiyuan-he-2/"
                class="icon brands fa-angellist alt"
              >
                <span class="label">Agnel List</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zbmike/"
                class="icon brands fa-github alt"
              >
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zhiyuan-he-mike/"
                class="icon brands fa-linkedin alt"
              >
                <span class="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="mailto:zbmanhe@gmail.com" class="icon fa-envelope alt">
                <span class="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
        <p class="copyright">&copy; Mike He.</p>
      </footer>
    </>
  );
}

export default App;
