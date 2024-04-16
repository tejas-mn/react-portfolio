import "./App.css";
import { useState, useEffect } from "react";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { LeftComponent } from "./components/Left/components/Left.component";
import { RightComponent } from "./components/Right/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/Navbar";
import AlertMessages from "./components/utils/components/Alert";
import Progress from "./components/utils/Progress";

function App() {
  const { theme } = useTheme();

  const [scrollPosition, setScrollPosition] = useState(0);

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);

    setScrollPosition(scrollPosition);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    listenToScrollEvent();
    return () => {
      document.removeEventListener("scroll", calculateScrollDistance);
    };
  }, []);

  return (
    <>
    <Progress scroll={scrollPosition + '%'} />
      <AlertMessages />
      <ParticlesBackground />
      <div className={`App ${theme}`}>
        <div data-testid="left" className="left">
          <LeftComponent />
        </div>

        <div data-testid="right" className="right">
          <RightComponent />
        </div>

        <div className="mobile-nav">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}