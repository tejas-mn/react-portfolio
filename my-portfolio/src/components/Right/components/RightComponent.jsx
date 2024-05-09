import { Outlet, useLocation } from "react-router-dom";
import { lazy } from "react";

const LazyAbout = lazy(() => import("./About"));

export function RightComponent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <LazyAbout /> : <Outlet />}
    </>
  );
}