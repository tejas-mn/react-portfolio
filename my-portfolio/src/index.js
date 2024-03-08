import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemedApp } from "./App";
import reportWebVitals from "./reportWebVitals";
import { AlertProvider } from "./Providers/AlertProvider";
import { FeatureToggleProvider } from "./Providers/FeatureProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Experience } from "./components/Right/Experience";
import { About } from "./components/Right/About";
import { Work } from "./components/Right/Work";
import Contact from "./components/Right/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AlertProvider>
    <FeatureToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThemedApp />}>
            <Route exact path="about" element={<About />} />
            <Route exact path="experience" element={<Experience />} />
            <Route exact path="work" element={<Work />} />
            <Route exact path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </FeatureToggleProvider>
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
