import { skills } from "./DataProvider";

function Skill({skill}){
    return <div> <li>{skill}</li> </div>
}

export function Skills(){
    return ( 
        <section>
            <h2>Tech Skills</h2>
            <div className='skills'>
                { skills.map(ele => <Skill key={ele} skill={ele} />) }
            </div>
        </section>
    )
}