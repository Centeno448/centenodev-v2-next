import { fetchProjectFromCMS } from '@/utils';
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
  params: Promise<{ lang: string; slug: string }>;
}) {
  const params_ = await params;
  const slug = params_.slug;
  const locale = params_.lang;
  const project = await fetchProjectFromCMS(slug, locale);

  return (
    <div className={styles.projectDetails}>
      <p className={styles.name}>{project.name}</p>
      <Link className={styles.back} href={`/${locale}/projects`}>
        <Image
          className={styles.arrow}
          alt="back arrow"
          src="/back.svg"
          width={15}
          height={15}
        />
        <span>
          {locale == 'en' ? 'Back to projects' : 'Regresar a proyectos'}
        </span>
      </Link>

      <div>
        <p className={styles.sectionTitle}>
          {locale == 'en' ? 'Description' : 'Descripción'}
        </p>
        <p className={styles.sectionContent}>{project.description}</p>
      </div>

      <div>
        <p className={styles.sectionTitle}>
          {locale == 'en' ? 'Challenges' : 'Desafíos'}
        </p>
        <ul className={styles.sectionContent}>
          {project.challenges.map((challenge) => (
            <li key={challenge.id}>{challenge.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className={styles.sectionTitle}>
          {locale == 'en' ? 'Lessons' : 'Lecciones'}
        </p>
        <ul className={styles.sectionContent}>
          {project.lessons.map((lesson) => (
            <li key={lesson.id}>{lesson.text}</li>
          ))}
        </ul>
      </div>

      {project.repos && (
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
