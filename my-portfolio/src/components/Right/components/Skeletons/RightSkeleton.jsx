import AboutSkeleton from "./AboutSkeleton";
import { NavBar } from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { NavBarSkeleton } from "./NavBarSkeleton";

export function RightSkeleton() {
  const location = useLocation();

  return (
    <div className="right-01">
      <div data-testid="desktop-nav" className="desktop-nav">
        <NavBarSkeleton />
      </div>
      {location.pathname === "/" ? <AboutSkeleton/> : <Outlet />}
    </div>
  );
}