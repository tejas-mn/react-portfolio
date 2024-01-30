import { Skills } from "./Skill";
import { Link, Outlet } from "react-router-dom";




export function RightComponent(){
    return   (
    <div className="right">
      <div className="right-nav">
        <Link className="link" to='/about'> <h2>About |</h2> </Link>
        <Link className="link" to='/experience'> <h2>Experience |</h2> </Link>
        <Link className="link" to='/work'> <h2>Work</h2> </Link>
      </div>
    <Outlet/>
  </div>
  )
}