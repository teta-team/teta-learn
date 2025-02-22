import { useEffect, useState } from "react";
import Project from "../../components/Project";
import supabase from "../../supabase";

function Physics() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProjects(physicsLevel) {
    try {
      let query = supabase.from("projects").select("*").eq("lesson", "physics");

      if (physicsLevel) {
        query = query.contains("tags", [`فیزیک ${physicsLevel}`]);
      } else {
        query = query.contains("tags", ["فیزیک"]);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Error loading projects:", error);
      } else {
        setProjects(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const urlParams = new URLSearchParams(window.location.search);
    let physicsLevel = urlParams.get("id");

    if (physicsLevel === "10") {
      physicsLevel = "1";
    } else if (physicsLevel === "11") {
      physicsLevel = "2";
    } else if (physicsLevel === "12") {
      physicsLevel = "3";
    } else if (!physicsLevel) {
      physicsLevel = null;
    }

    loadProjects(physicsLevel);
  }, []);

  if (loading) {
    return (
      <div id="loader-box">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <div className="lesson">
      <div className="container">
        <div className="lab-title ph">
          <h2>آزمایشات درسی</h2>
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

export default Physics;
