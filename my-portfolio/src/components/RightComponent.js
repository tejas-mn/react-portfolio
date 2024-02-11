import { About } from "./About";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="right-nav">
        <Link className="link" to="/about">
          <button className="view-btn">🖋️ About </button>{" "}
        </Link>
        <Link className="link" to="/experience">
          <button className="view-btn">💼 Experience </button>{" "}
        </Link>
        <Link className="link" to="/work">
          <button className="view-btn">🚀 Work </button>{" "}
        </Link>
        <Link className="link" to="/work">
          <button className="view-btn">📞 Contact</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export function RightComponent(props) {
  const location = useLocation();

  return (
    <>
      <div className="right">
        <div className="desktop-nav">
          <NavBar />
        </div>
        {location.pathname === "/" ? <About /> : <Outlet />}
      </div>

      <div className="mobile-nav">
        <NavBar />
      </div>
    </>
  );
}
