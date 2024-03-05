import "./App.css";
import ParticlesBackground from "./components/utils/ParticlesBackground";
import { LeftComponent } from "./components/Left/LeftComponent";
import { RightComponent } from "./components/Right/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/Navbar";
import AlertMessage from "./components/utils/Alert";

function App() {
  const { theme } = useTheme();

  return (
    <>
    <AlertMessage/>
      <ParticlesBackground/>
      <div className={`App ${theme}`}>
        <LeftComponent />
        <RightComponent />
        <div className="mobile-nav">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export function ThemedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
