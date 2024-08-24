import { Link } from "react-router-dom";

function NavBtn({ name, link }) {
  return (
    <Link className="link" to={link}>
      <button className="view-btn">{name}</button>{" "}
    </Link>
  );
}

export function NavBar({mobileNav}) {

  const navBtns = [
    { name: !mobileNav?"🖋️ About":" About", link: "/about" },
    { name: !mobileNav?"💼 Experience":"Experience", link: "/experience" },
    { name: !mobileNav?"👨🏼‍💻 Work":"Work", link: "/work" },
    { name: !mobileNav?"📞 Contact":"Contact", link: "/contact" }
  ]

  return (
    <div className="nav-container">
      <div className="right-nav">
        {navBtns.map(btn => <NavBtn key={btn.link} name={btn.name} link={btn.link} />)}
      </div>
    </div>
  );
}