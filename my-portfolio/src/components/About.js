import { Skills } from "./Skill";
import { edu } from "./DataProvider";
function Education(){
  return (
    <>
      <section>
            <h2>Education</h2>
            {
              edu.map((e) => <>
                <p id={e.id}>
                  <b>{e.title}</b>  
                  <i style={{float:'right'}}> ({e.timeline})</i>  
                  <br/>
                  <i>{e.desc}</i>     
                </p>
              </>)
            }
        </section>
    </>
  );
}

function AboutMe(){
  return (
    <>
      <h2>About Me</h2>
      <p>
          Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, Python (Flask), SQL, C#, and React. Skilled in building robust and scalable applications, with a demonstrated ability to develop and deploy projects independently. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.          
      </p>
    </>
  )
}

export function About(){
    return  (
        <section>
          <AboutMe/>
          <Education/>
          <Skills/>
        </section>
    )
  }