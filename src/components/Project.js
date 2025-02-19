import { Link } from "react-router-dom";

function Project({ id, image, fname, text, tags = [], link }) {
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
      <Link to={link} target="_blank">امتحان کن</Link>
    </div>
  );
}

export default Project;
