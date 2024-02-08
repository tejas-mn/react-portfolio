import { exp } from "../Providers/DataProvider";

export function Experience(){
    return  (
    <section>
        <h2>Experience</h2>
        <p>
            Aspiring Software Engineer from computer science background, graduated in 2023 currently working as SDET in US based product company. Proficient in web development and backend programming with expertise in HTML, CSS, JavaScript, Python (Flask), SQL, C#, and React. Skilled in building robust and scalable applications, with a demonstrated ability to develop and deploy projects independently. Eager to leverage experience in development to contribute effectively to development teams in a challenging environment. Strong problem-solving skills combined with a passion for learning and adapting to new technologies.          
        </p>
        { exp.map((ex) => <ExperienceDetail e={ex}/>) }
    </section>
    )
}                     

function ExperienceDetail({e})
{
  return (
    <>
      <p key={e.id}>
          <div style={{borderLeft:'3px solid lightblue', paddingLeft:'5px'}}>
              <b>{e.company} </b>  <i style={{float:'right'}}> ({e.timeline})</i>  <br/>
              <i>{e.title}</i> 
          </div>
          <ul>
            { e.desc.map((d)=><li>{d}</li>) }
          </ul>
      </p>
    </>
  )
}