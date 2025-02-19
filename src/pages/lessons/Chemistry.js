import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";

function Chemistry() {
  const [projects, setProjects] = useState([]);

  async function loadProjects(chemistryLevel) {
    try {
      let query = supabase
        .from("projects")
        .select("*")
        .eq("lesson", "chemistry");

      if (chemistryLevel) {
        query = query.contains("tags", [`شیمی ${chemistryLevel}`]);
      } else {
        query = query.contains("tags", ["شیمی"]);
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
    let chemistryLevel = urlParams.get("id");

    if (chemistryLevel === "10") {
      chemistryLevel = "1";
    } else if (chemistryLevel === "11") {
      chemistryLevel = "2";
    } else if (chemistryLevel === "12") {
      chemistryLevel = "3";
    } else if (!chemistryLevel) {
      chemistryLevel = null;
    }

    loadProjects(chemistryLevel);
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

export default Chemistry;
