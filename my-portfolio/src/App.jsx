import "./App.css";
import { LeftComponent } from "./components/Left/components/Left.component";
import { RightComponent } from "./components/Right/components/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/components/Navbar";
import AlertMessages from "./components/utils/components/Alert";
import Progress from "./components/utils/components/Progress";
import ParticlesBackground from "./components/utils/components/ParticlesBackground";
import useScroll from "./hooks/useScroll";
import { useEffect } from "react";
import { useUser } from "./Providers/UserProvider";

function App() {
  const { theme } = useTheme();
  const scrollPosition = useScroll();
  const { clearCache, clearAllCache } = useUser();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("clearcache") === "true") {
      clearAllCache();
      console.log("All cache cleared via URL parameter.");
      params.delete("clearcache");
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleRefresh = () => {
      clearCache(); // This will clear only the resume data cache
      // The next data fetch will bypass the cache
  };

  const handleClearAll = () => {
      clearAllCache(); // This will clear all cached data
  };

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
          <div data-testid="desktop-nav" className="desktop-nav">
            <NavBar mobileNav={false}/>
          </div>
          <RightComponent />
        </div>

        <div className="mobile-nav">
          <NavBar mobileNav={true}/>
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
