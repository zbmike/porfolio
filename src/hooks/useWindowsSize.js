import { useEffect, useState } from "react";

import throttle from "../utilities/throttle";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = throttle(
      () =>
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      100
    );
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
