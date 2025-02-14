import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";

function Physics() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    let { data: projects, error } = await supabase.from("projects").select("*");
    setProjects(projects);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="physics lesson">
      <div className="container">
        <div className="d-flex row f-wrap">
          {projects.map((project, index) => {
            <Project
              id={project.id}
              lesson={project.lesson}
              image={project.image_url}
              fname={project.name}
              text={project.text}
              tags={project.tags}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Physics;
