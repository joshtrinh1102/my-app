const experience=[
    { title:'Member' ,company:'Investment Club', duration:' Jan 2022- Now'}
    , {title:'Member' ,company:'Hexa Consulting', duration:' Jan 2023- Now'}
]

      

export default function Exp(){
    const experiencelist = experience.map(exp =>
      <li key={exp.id}>
        {exp.title}
        : {exp.company}
        {exp.duration}
      </li>
    )
    return(
      <ul>{experiencelist}</ul>
      
    )

    
    }
    

      
     