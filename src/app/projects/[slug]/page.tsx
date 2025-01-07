import { ListProject, SpecificProject } from "@/app/types";
import { fetchCMSContent, fetchProjectFromCMS } from "@/app/utils";

import styles from "./page.module.scss";

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{
  slug: string;
}> {
  const projects = await fetchCMSContent("api/projects?sort=id").then((res) =>
    res.json()
  );

  return projects.data.map((project: ListProject) => ({
    slug: project.slug,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const res = await fetchProjectFromCMS(slug).then((res) => res.json());
  const project = res.data[0] as SpecificProject;

  return (
    <div className={styles.projectDetails}>
      <p className={styles.name}>{project.name}</p>

      <div>
        <p className={styles.sectionTitle}>Description</p>
        <p className={styles.sectionContent}>{project.description}</p>
      </div>

      <div>
        <p className={styles.sectionTitle}>Challenges</p>
        <ul className={styles.sectionContent}>
          {project.challenges.item.map((challenge) => (
            <li key={challenge.id}>{challenge.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className={styles.sectionTitle}>Lessons</p>
        <ul className={styles.sectionContent}>
          {project.lessons.item.map((lesson) => (
            <li key={lesson.id}>{lesson.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
