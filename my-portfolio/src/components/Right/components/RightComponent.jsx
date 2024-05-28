import { Outlet, useLocation, useParams } from "react-router-dom";
import { lazy } from "react";

const LazyAbout = lazy(() => import("./About"));

export function RightComponent() {
  const location = useLocation();
  const {username} = useParams();

  return (
    <>
      {(location.pathname === "/u/"+username || location.pathname === "/")? <LazyAbout /> : <Outlet />}
    </>
  );
}