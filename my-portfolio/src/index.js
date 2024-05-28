import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { UserProvider } from "./Providers/UserProvider";
import { AlertProvider } from "./Providers/AlertProvider";
import { FeatureToggleProvider } from "./Providers/FeatureProvider";
import { ThemeProvider } from "./Providers/ThemeProvider";
import store from './Redux/store';
import reportWebVitals from "./reportWebVitals";
import PageNotFound from "./components/utils/components/PageNotFound";
import AppSkeleton from "./components/Right/components/Skeletons/AppSkeleton";
import AboutSkeleton from "./components/Right/components/Skeletons/AboutSkeleton";
import ExperienceSkeleton from "./components/Right/components/Skeletons/ExperienceSkeleton";
import WorkSkeleton from "./components/Right/components/Skeletons/WorkSkeleton";
import ContactSkeleton from "./components/Right/components/Skeletons/ContactSkeleton";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
const ThemedApp = React.lazy(() => import('./App'));
const LazyAbout = React.lazy(() => import('./components/Right/components/About'));
const LazyExperience = React.lazy(() => import('./components/Right/components/Experience'))
const LazyWork = React.lazy(() => import('./components/Right/components/Work'))
const LazyContact = React.lazy(() => import('./components/Right/components/Contact'))

const root = createRoot(document.getElementById("root"));

const App = () => (
  <React.StrictMode>

    <Provider store={store}>
      <AlertProvider>
        <FeatureToggleProvider>
          <UserProvider>
            <RouterProvider router={AppRoutes} />
          </UserProvider>
        </FeatureToggleProvider>
      </AlertProvider>
    </Provider>

  </React.StrictMode>
);

const common=  [
  {
    path: "about",
    element: (
      <Suspense fallback={<AboutSkeleton />}>
        <LazyAbout />
      </Suspense>
    )
  },
  {
    path: "experience",
    element: (
      <Suspense fallback={<ExperienceSkeleton />}>
        <LazyExperience />
      </Suspense>
    )
  },
  {
    path: "work",
    element: (
      <Suspense fallback={<WorkSkeleton />}>
        <LazyWork />
      </Suspense>
    )
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<ContactSkeleton />} >
        <LazyContact />
      </Suspense>
    )
  },
  {
    path: "*",
    element: <PageNotFound />
  }
];

const routes = [
  {

    path: "login",
    element: <Login />
  },
  {

    path: "signup",
    element: <SignUp />

  },
  {
    path: "/",
    element: (
      <Suspense fallback={<ThemeProvider><AppSkeleton /></ThemeProvider>}>
        <ThemedApp />
      </Suspense>
    ),
    children:common
  },
  {
    path: "/u/:username",
    element: (
      <Suspense fallback={<ThemeProvider><AppSkeleton /></ThemeProvider>}>
        <ThemedApp />
      </Suspense>
    ),
    children: common
  }
];

const AppRoutes = createBrowserRouter(routes);

root.render(<App />);
reportWebVitals();
