import useWindowsSize from "./hooks/useWindowsSize";
import "./styles/app.css";

function App() {
  const { width: windowWidth } = useWindowsSize();
  if (!windowWidth) return null;

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
        <div
          className="container"
        ></div>
      </div>
    </>
  );
}

export default App;
