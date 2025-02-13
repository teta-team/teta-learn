import { Link } from "react-router-dom";

function Project({ id, lesson, image, fname, text, tags = [], grid }) {
  return (
    <div className="project d-flex column align-items-center">
      <img src={image} alt={fname} />
      <h3>{fname}</h3>
      <p>{text}</p>
      <div className="tags d-flex row">
        {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
      </div>
      <Link to={`/lessons/${lesson}/${id}`}>امتحان کن</Link>
    </div>
  );
}

export default Project;
