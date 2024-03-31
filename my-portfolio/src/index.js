import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AlertProvider } from "./Providers/AlertProvider";
import { FeatureToggleProvider } from "./Providers/FeatureProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';
import PageNotFound from "./components/utils/PageNotFound";
const ThemedApp = React.lazy(() => import('./App'));
const LazyAbout = React.lazy(() => import('./components/Right/About'));
const LazyExperience = React.lazy(() => import('./components/Right/Experience'))
const LazyWork = React.lazy(() => import('./components/Right/Work'))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider>
      <FeatureToggleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}> <ThemedApp /> </Suspense>}>
              <Route exact path="about" element={<Suspense fallback={<div>Loading...</div>}> <LazyAbout /> </Suspense>} />
              <Route exact path="experience" element={<Suspense fallback={<div>Loading...</div>}> <LazyExperience /> </Suspense>} />
              <Route exact path="work" element={<Suspense fallback={<div>Loading...</div>}> <LazyWork /> </Suspense>} />
              <Route path="*" element={<PageNotFound />}  />
            </Route>
          </Routes>
        </BrowserRouter>
      </FeatureToggleProvider>
    </AlertProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();