import { Link } from "react-router-dom";

function NavBtn({ name, link }) {
  return (
    <Link className="link" to={link}>
      <button className="view-btn">{name}</button>{" "}
    </Link>
  );
}

export function NavBar() {
  
  const navBtns = [
    {name:"🖋️ About", link:"/about"},
    {name:"💼 Experience", link:"/experience"},
    {name:"🚀 Work", link:"/work"},
    {name:"📞 Contact", link:"/contact"}
  ]

  return (
    <div className="nav-container">
      <div className="right-nav">
        { navBtns.map(btn => <NavBtn key={btn.link} name={btn.name} link={btn.link}/>) }
      </div>
    </div>
  );
}