import { fetchProjectFromCMS } from "@/app/utils";

import styles from "./page.module.scss";

export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await fetchProjectFromCMS(slug);

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
