const skills=[
    {item: 'Public Speaking', id:1, proficiency:'Beginner'
  },
  {item: 'Coding' , id:2, proficiency:'Beginner'},
  {item: 'Problem-solving', id: 3, proficiency:'Beginner'},
  {item:'Teamwork', id: 4, proficiency:'Beginner'},
  {item:' Time Management', id: 5, proficiency:'Beginner'}
  ]

 export default function SkillsList() {
    const skillsitems = skills.map(skill =>
      <li key={skill.id}>
        {skill.item}
        : {skill.proficiency}
      </li>

    )
    return(
      <ul>{skillsitems}</ul>
      
    )
  }// skills sectiond