import { NavBar } from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { lazy } from "react";

const LazyAbout = lazy(() => import("./About"));

export function RightComponent() {
  const location = useLocation();

  return (
    <div className="right-01">
      <div data-testid="desktop-nav" className="desktop-nav">
        <NavBar />
      </div>
      {location.pathname === "/" ? <LazyAbout /> : <Outlet />}
    </div>
  );
}