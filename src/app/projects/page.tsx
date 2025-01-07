import { fetchCMSContent } from "../utils";
import { ListProject } from "../types";
import Project from "./project";
import styles from "./page.module.scss";

export default async function Projects() {
  const data = await fetchCMSContent("api/projects");
  const projects = await data.json();

  return (
    <div className={styles.projectContainer}>
      {projects.data.map((project: ListProject) => (
        <Project key={project.documentId} {...project} />
      ))}
    </div>
  );
}
