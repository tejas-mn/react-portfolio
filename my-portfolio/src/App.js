import "./App.css";
import { LeftComponent } from "./components/LeftComponent";
import { RightComponent } from "./components/RightComponent";
import { ThemeProvider, useTheme } from "./Providers/ThemeProvider";

function App() {
  const {theme} = useTheme();

  return (
    <>
      <div className={`App ${theme}`}>
        <LeftComponent />
        <RightComponent />
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

export default App;
