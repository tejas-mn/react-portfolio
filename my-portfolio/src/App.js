import "./App.css";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { LeftComponent } from "./components/Left/LeftComponent";
import { RightComponent } from "./components/Right/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/Navbar";
import AlertMessages from "./components/utils/Alert";

function App() {
  const { theme } = useTheme();

  return (
    <>
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