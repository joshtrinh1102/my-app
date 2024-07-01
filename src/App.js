const user = {
  name: "Josh Trinh",
  imageUrl:"https://course-api.com/react-store-products",
  imageSize :90,
  linkedIn : "https://www.linkedin.com/in/longtrinhjosh/",
  email : "longtrinh@usf.edu",
  bio :"Dedicated and adaptable rising senior at the University of South Florida with a focus on Business Analytics and Information Systems. Adaptability, hardworking and interpersonal skills demonstrated through data analysis projects and extracurricular activities. Eager to leverage technical knowledge and interpersonal skills in professional development"
 }

export default function Profile(){
  return(<>
    <h1>{user.name}</h1>
    <p>{user.email}/{user.linkedIn}</p>
    <h3>Biography:</h3>
    <p>{user.bio}</p>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      />
    
    </>)
}