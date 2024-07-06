const education={ Degree: " Bachelors of Science, Business Analytics and Information Systems",
    School: 'University of South Florida',
    Years: '2022-2025'
    
  }
  
export default function Edu(){
    return(<>
    <p>{education.Degree}</p>
    <p>{education.School}</p>
    <p>{education.Years}</p></>)
}