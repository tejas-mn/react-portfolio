function Skill({skill}){
    return   <div> <li>{skill}</li> </div>
}

export function Skills(){
    let skills = ['Javascript', 'C# .NET', 'React', 'C++'];
    return ( 
        <div className='skills'>
            {
                skills.map(ele => {
                    return <Skill key={ele} skill={ele} />
                })
            }
        </div>
    )
}