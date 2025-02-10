import { fetchCMSContent } from '@/utils';
import { ListProject } from '@/types';
import Project from './project';
import styles from './page.module.scss';
import { i18n, Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Projects({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const params_ = await params;
  const locale = params_.lang;
  const tags = ['projects'];
  const data = await fetchCMSContent(
    `api/projects?sort=updatedAt:desc&locale=${locale}`,
    tags
  );
  const projects = await data.json();

  return (
    <div className={styles.projectContainer}>
      {projects.data.map((project: ListProject) => (
        <Project key={project.documentId} {...project} locale={locale} />
      ))}
    </div>
  );
}
