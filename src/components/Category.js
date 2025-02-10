import { Link } from "react-router-dom"

function Category({id, name, image}) {
  return (
    <Link to={`/lessons/${id}`} className="category-box d-flex column align-items-center">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </Link>
  )
}

export default Category