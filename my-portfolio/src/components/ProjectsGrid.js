import React, { useState } from 'react';
import './projects.css'
import { ProjectsList } from './ProjectsList';
import { ProfileLinks } from './ProfileLinks';

function ProjectsGrid() {
  const [isVisible, setIsVisible] = useState(true);
  
  const projects = [
    { id: 1, title: 'E-commerce Website', description: 'A fully functional e-commerce website built with React and Redux. Allows users to browse products, add them to the cart, and proceed to checkout.', imageUrl: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/Ecommerce-design-strategies-for-Amazon-sellers.jpg?auto=format&q=60&fit=max&w=930' },
    { id: 2, title: 'Social Media App', description: 'A social media application where users can create posts, follow other users, like and comment on posts. Built with MERN stack (MongoDB, Express.js, React, Node.js).', imageUrl: 'https://s3-alpha.figma.com/hub/file/1769198965/cb3715a0-77a8-4c15-a582-1a4b3c57bff9-cover.png' },
    { id: 1, title: 'E-commerce Website', description: 'A fully functional e-commerce website built with React and Redux. Allows users to browse products, add them to the cart, and proceed to checkout.', imageUrl: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/Ecommerce-design-strategies-for-Amazon-sellers.jpg?auto=format&q=60&fit=max&w=930' },
    { id: 2, title: 'Social Media App', description: 'A social media application where users can create posts, follow other users, like and comment on posts. Built with MERN stack (MongoDB, Express.js, React, Node.js).', imageUrl: 'https://s3-alpha.figma.com/hub/file/1769198965/cb3715a0-77a8-4c15-a582-1a4b3c57bff9-cover.png' },
    { id: 1, title: 'E-commerce Website', description: 'A fully functional e-commerce website built with React and Redux. Allows users to browse products, add them to the cart, and proceed to checkout.', imageUrl: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/Ecommerce-design-strategies-for-Amazon-sellers.jpg?auto=format&q=60&fit=max&w=930' },
    { id: 3, title: 'Task Management System', description: 'A task management system for organizing tasks and projects. Features include task assignments, deadlines, and progress tracking. Built with Django and React.', imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*00Kvnloc6fRRMbJCFeilVw@2x.png' },
    { id: 1, title: 'E-commerce Website', description: 'A fully functional e-commerce website built with React and Redux. Allows users to browse products, add them to the cart, and proceed to checkout.', imageUrl: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/07/Ecommerce-design-strategies-for-Amazon-sellers.jpg?auto=format&q=60&fit=max&w=930' },
    { id: 3, title: 'Task Management System', description: 'A task management system for organizing tasks and projects. Features include task assignments, deadlines, and progress tracking. Built with Django and React.', imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*00Kvnloc6fRRMbJCFeilVw@2x.png' },
    { id: 2, title: 'Social Media App', description: 'A social media application where users can create posts, follow other users, like and comment on posts. Built with MERN stack (MongoDB, Express.js, React, Node.js).', imageUrl: 'https://s3-alpha.figma.com/hub/file/1769198965/cb3715a0-77a8-4c15-a582-1a4b3c57bff9-cover.png' },

];

  return (
    <>
        <div className={`project-grid ${isVisible ? 'fade-in' : ''}`}>
            {projects.map(project => (
                <div key={project.id} className="project-box">
                <img src={project.imageUrl} alt={project.title} />
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