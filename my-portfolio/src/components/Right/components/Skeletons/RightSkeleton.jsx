import { Outlet, useLocation } from "react-router-dom";
import { NavBarSkeleton } from "./NavBarSkeleton";
import { lazy } from "react";

const LazyAboutSkeleton = lazy(() => import("./AboutSkeleton"));

export function RightSkeleton() {
  const location = useLocation();

  return (
    <div className="right-01">
      <div data-testid="desktop-nav" className="desktop-nav">
        <NavBarSkeleton />
      </div>
      {location.pathname === "/" ? <LazyAboutSkeleton /> : <Outlet />}
    </div>
  );
}