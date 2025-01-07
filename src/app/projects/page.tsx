import { fetchCMSContent } from "../utils";
import { ListProject } from "../types";
import Project from "./project";

export default async function Projects() {
  const data = await fetchCMSContent("api/projects");
  const projects = await data.json();

  return (
    <>
      {projects.data.map((project: ListProject) => (
        <Project key={project.documentId} {...project} />
      ))}
    </>
  );
}
