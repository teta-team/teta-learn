import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";

function Geometry() {
  const [projects, setProjects] = useState([]);

  async function loadProjects(geometryLevel) {
    try {
      let query = supabase
        .from("projects")
        .select("*")
        .eq("lesson", "geometry");

      if (geometryLevel) {
        query = query.contains("tags", [`هندسه ${geometryLevel}`]);
      } else {
        query = query.contains("tags", ["هندسه"]);
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
    let geometryLevel = urlParams.get("id");

    if (geometryLevel === "10") {
      geometryLevel = "1";
    } else if (geometryLevel === "11") {
      geometryLevel = "2";
    } else if (geometryLevel === "12") {
      geometryLevel = "3";
    } else if (!geometryLevel) {
      geometryLevel = null;
    }

    loadProjects(geometryLevel);
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

export default Geometry;
