import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";

function MathPage() {
  const [projects, setProjects] = useState([]);

  async function loadProjects(mathLevel) {
    try {
      let query = supabase
        .from("projects")
        .select("*")
        .eq("lesson", "geometry");

      if (mathLevel) {
        query = query.contains("tags", [`ریاضی ${mathLevel}`]);
      } else {
        query = query.contains("tags", ["ریاضی"]);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Error loading projects:", error);
      } else {
        setProjects(data);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const urlParams = new URLSearchParams(window.location.search);
    let mathLevel = urlParams.get("id");

    if (mathLevel === "10") {
      mathLevel = "1";
    } else if (mathLevel === "11") {
      mathLevel = "2";
    } else if (mathLevel === "12") {
      mathLevel = "3";
    } else if (!mathLevel) {
      mathLevel = null;
    }

    loadProjects(mathLevel);
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MathPage;
