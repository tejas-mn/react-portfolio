import { useEffect } from "react";
import "./App.css";
import { LeftComponent } from "./components/Left/LeftComponent";
import { RightComponent } from "./components/Right/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";
import { NavBar } from "./components/Right/Navbar";
import { useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function App() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const bg = {
    "light-theme": "var( --index-bg-light)",
    "dark-theme": "var( --index-bg-dark)",
  };

  const particleColor = {
    "dark-theme": "#ffffff",
    "light-theme": "#000000",
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: bg[theme],
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor[theme],
        },
        links: {
          color: particleColor[theme],
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    document.querySelector("body").style.background = bg[theme];
    options.particles.color = particleColor[theme];
    options.particles.links.color = particleColor[theme];
    // eslint-disable-next-line
  }, [theme]);

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />

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
