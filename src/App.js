
//U22275330
import Profile from './profile.js'

import SkillsList from './skills.js'

import Exp from './exp.js'

import Edu from './edu.js'
// experience section
export default function Gallery() {
  return(
    <>
    <section>
    
    <Profile/>
    </section>

<section>
    <h3>Skills</h3>
    <SkillsList/>
  </section>


  <section>
    <h3>Experience</h3>
    <Exp/>
  </section>

  <section>
    <h3>Education</h3>
    <Edu/>
  </section>
    </>
  )
}






