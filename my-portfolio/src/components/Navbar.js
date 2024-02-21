import { Link } from "react-router-dom";

export function NavBar() {
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
