import ProjectsGrid from "./ProjectsGrid";
import { Skills } from "./Skill";
import React, { useState } from 'react';
import { ProjectsList } from "./ProjectsList";

export function Work(){
  const [isGridView, setGridView] = useState(false);
  const [btnText, setbtnText] = useState('Grid view');

  return ( 
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2 style={{color:'white'}}>Projects | Blogs</h2>
        <button 
          onClick={()=>{
            setGridView((prev)=>!prev);
            (!isGridView)?setbtnText('List View'):setbtnText('Grid View');
          }} 
          style={{height:'30px', borderRadius:'5px', cursor:'pointer'}}>{btnText}</button>
      </div>
        {
            (isGridView)?(<ProjectsGrid/>):(<ProjectsList/>)
        }
    </section>
    )
}