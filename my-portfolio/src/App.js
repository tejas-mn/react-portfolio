import { useEffect } from "react";
import "./App.css";
import { LeftComponent } from "./components/Left/LeftComponent";
import { RightComponent } from "./components/Right/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/Navbar";

function App() {
  const { theme } = useTheme();

  const bg = {
    "light-theme": 'var( --index-bg-light)',
    "dark-theme": 'var( --index-bg-dark)'
  }

  useEffect(() => {
    document.querySelector('body').style.background = bg[theme];
    // eslint-disable-next-line
  }, [theme]);

  return (
    <>
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
