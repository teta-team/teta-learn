import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";
import LessonBox from "../../components/LessonBox";

function Physics() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    let { data: projects } = await supabase
      .from("projects")
      .select("*")
      .eq("lesson", "chemistry");
    setProjects(projects);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProjects();
  }, []);
  return (
    <div className="lesson">
      <div className="container">
        <div className="apps-title">
          <h2>برنامه های کاربردی</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row f-wrap">
          {projects.map((project, index) => (
            <Project
              key={index}
              id={project.id}
              lesson={project.lesson}
              image={project.image_url}
              fname={project.name}
              text={project.text}
              tags={project.tags}
            />
          ))}
        </div>
        <div className="lesson-title">
          <h2>جوزه های فیزیک</h2>
          <div className="under-line"></div>
        </div>
        <div className="d-flex row f-wrap">
          <LessonBox />
        </div>
      </div>
    </div>
  );
}

export default Physics;
