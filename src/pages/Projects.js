import { useState, useEffect } from "react";
import IonsApp from "./apps/ions/Ions";
import JermMoli from "./apps/tabdilat/ch-jerm/Jerm";

function ProjectsPage() {
  const [id, setId] = useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newId = urlParams.get("id");
    if (newId !== id) {
      setId(newId);
    }
  }, []);

  return <>{id === "1" ? <IonsApp /> : id === "2" ? <JermMoli /> : ""}</>;
}

export default ProjectsPage;
