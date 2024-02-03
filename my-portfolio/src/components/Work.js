import ProjectsGrid from "./ProjectsGrid";
import { Skills } from "./Skill";
import React, { useState } from 'react';
import { ProjectsList } from "./ProjectsList";

export function Work(){
  const [isVisible, setIsVisible] = useState(false);
  
    return ( 
    <section>
        <h2>Projects | Blogs</h2>

        <a href="#" onClick={()=>{setIsVisible((prev)=>!prev)}} style={{color:'white'}}>Toggle View</a>
        
        {
            (isVisible)?(<ProjectsGrid/>):(<ProjectsList/>)
        }

    
    </section>
    )
  }