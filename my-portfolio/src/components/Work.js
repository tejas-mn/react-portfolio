import ProjectsGrid from "./ProjectsGrid";
import React, { useState } from 'react';
import { ProjectsList } from "./ProjectsList";

export function Work(){
  const [isGridView, setGridView] = useState(false);
  const [btnText, setbtnText] = useState('Grid view');

  return ( 
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2 style={{color:'white'}}>🚀 Projects | Blogs</h2>
        <button className="view-btn"
          onClick={()=>{
            setGridView((prev)=>!prev);
            (!isGridView)?setbtnText('List View'):setbtnText('Grid View');
          }} 
        >{btnText}</button>
      </div>
        { (isGridView)?(<ProjectsGrid isVisible={ isGridView } />):(<ProjectsList/>) }
    </section>
    )
}