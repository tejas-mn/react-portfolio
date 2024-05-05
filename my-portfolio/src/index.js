import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./Providers/UserProvider";
import { GridLoader } from "./components/utils/components/Loaders";
import FallbackLoader from "./components/utils/components/FallbackLoader";
import reportWebVitals from "./reportWebVitals";
import { AlertProvider } from "./Providers/AlertProvider";
import { FeatureToggleProvider } from "./Providers/FeatureProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';
import PageNotFound from "./components/utils/components/PageNotFound";
import AppSkeleton from "./components/Right/components/Skeletons/AppSkeleton";
import { ThemeProvider } from "./Providers/ThemeProvider";
import AboutSkeleton from "./components/Right/components/Skeletons/AboutSkeleton";
import ExperienceSkeleton from "./components/Right/components/Skeletons/ExperienceSkeleton";
import WorkSkeleton from "./components/Right/components/Skeletons/WorkSkeleton";
const ThemedApp = React.lazy(() => import('./App'));
const LazyAbout = React.lazy(() => import('./components/Right/components/About'));
const LazyExperience = React.lazy(() => import('./components/Right/components/Experience'))
const LazyWork = React.lazy(() => import('./components/Right/components/Work'))
const LazyContact = React.lazy(() => import('./components/Right/components/Contact'))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <AlertProvider>
          <FeatureToggleProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Suspense fallback={<ThemeProvider><AppSkeleton/></ThemeProvider>}> <ThemedApp /> </Suspense>}>
                  <Route exact path="about" element={<Suspense fallback={<AboutSkeleton/>}> <LazyAbout /> </Suspense>} />
                  <Route exact path="experience" element={<Suspense fallback={<ExperienceSkeleton/>}> <LazyExperience /> </Suspense>} />
                  <Route exact path="work" element={<Suspense fallback={<WorkSkeleton/>}> <LazyWork /> </Suspense>} />
                  <Route exact path="contact" element={<Suspense fallback={<FallbackLoader loader={GridLoader} />}> <LazyContact /> </Suspense>} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </FeatureToggleProvider>
        </AlertProvider>
      </Provider>
    </UserProvider>
  </React.StrictMode>
);


reportWebVitals();