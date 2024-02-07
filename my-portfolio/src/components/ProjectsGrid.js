import React, { useState } from 'react';
import './projects.css'
import { ProfileLinks } from './ProfileLinks';
import { projects } from './DataProvider';

function ProjectsGrid({isVisible}) {
  
  return (
    <>
        <div className={`project-grid ${isVisible ? ' fade-in' : ''}`}>
            {projects.map(project => (
                <div key={project.id} className="project-box">
                <div style={{overflow:'hidden', transition:'0.3s ease-in-out',  borderRadius:'8px'}}>
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <ProfileLinks/>
                <p>{project.description}</p>
                </div>
            ))}
        </div>
     </>
  )
}

export default ProjectsGrid;