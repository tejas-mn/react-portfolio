import { Outlet, useLocation } from "react-router-dom";
import { lazy } from "react";

const LazyAboutSkeleton = lazy(() => import("./AboutSkeleton"));

export function RightSkeleton() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <LazyAboutSkeleton /> : <Outlet />}
    </>
  );
}