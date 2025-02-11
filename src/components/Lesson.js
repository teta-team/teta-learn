import { Link } from "react-router-dom"

function Lesson({id, name, lesson, image}) {
  return (
    <Link to={`/lessons/${lesson}?id=${id}`} className="lesson-box d-flex column align-items-center">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </Link>
  )
}

export default Lesson