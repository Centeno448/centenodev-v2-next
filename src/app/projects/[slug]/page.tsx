import { fetchProjectFromCMS } from '@/app/utils';
import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.scss';
import ctaStyles from '../../ctas.module.scss';

export const dynamic = 'force-static';
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
      <Link className={styles.back} href="/projects">
        <Image
          className={styles.arrow}
          alt="back arrow"
          src="/back.svg"
          width={15}
          height={15}
        />
        <span>Back to projects</span>
      </Link>

      <div>
        <p className={styles.sectionTitle}>Description</p>
        <p className={styles.sectionContent}>{project.description}</p>
      </div>

      <div>
        <p className={styles.sectionTitle}>Challenges</p>
        <ul className={styles.sectionContent}>
          {project.challenges.map((challenge) => (
            <li key={challenge.id}>{challenge.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className={styles.sectionTitle}>Lessons</p>
        <ul className={styles.sectionContent}>
          {project.lessons.map((lesson) => (
            <li key={lesson.id}>{lesson.text}</li>
          ))}
        </ul>
      </div>

      {project.repos?.length && (
        <div className={`${ctaStyles.ctas}`}>
          {project.repos.map((repo) => (
            <Link
              key={repo.id}
              className={ctaStyles.primary}
              target="_blank"
              href={repo.url}
            >
              {repo.linkText}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
