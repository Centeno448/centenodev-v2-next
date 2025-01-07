import { fetchCMSContent } from "../utils";
import { ListProject } from "../types";

export default async function Projects() {
  const data = await fetchCMSContent("api/projects");
  const projects = await data.json();

  return (
    <>
      {projects.data.map((project: ListProject) => (
        <p key={project.id}>{project.name}</p>
      ))}
    </>
  );
}
