function Skill({skill}){
    return   <div> <li>{skill}</li> </div>
}

export function Skills(){
    let skills = ['DSA', 'OOPS', 'Javascript', 'C#', '.NET WEB API', 'React', 'C++', 'Python', 'Flask', 'AWS' ];
    return ( 
        <section>
            <h2>Tech Skills</h2>
            <div className='skills'>
                {
                    skills.map(ele => {
                        return <Skill key={ele} skill={ele} />
                    })
                }
            </div>
        </section>
    )
}