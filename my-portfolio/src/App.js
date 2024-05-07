import "./App.css";
import { LeftComponent } from "./components/Left/components/Left.component";
import { RightComponent } from "./components/Right/components/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/components/Navbar";
import AlertMessages from "./components/utils/components/Alert";
import Progress from "./components/utils/components/Progress";
import ParticlesBackground from "./components/utils/components/ParticlesBackground";
import useScroll from "./hooks/useScroll";

function App() {
  const { theme } = useTheme();
  const scrollPosition = useScroll();

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
