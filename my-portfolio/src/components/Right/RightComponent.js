import  About  from "./About";
import { NavBar } from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export function RightComponent() {
  const location = useLocation();

  return (
    <div className="right">
      <div className="desktop-nav">
        <NavBar />
      </div>
      {location.pathname === "/" ? <About /> : <Outlet />}
    </div>
  );
}