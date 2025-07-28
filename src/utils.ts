import chalk from 'chalk';
import { notFound } from 'next/navigation';
import { SpecificProject } from './types';
import { Locale } from './i18n-config';

const API_KEY = process.env.CMS_API_KEY;
const BASE_URL = process.env.CMS_BASE_URL;

export async function fetchCMSContent(path: string, tags?: string[]) {
  return fetch(`${BASE_URL}/${path}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    next: { tags, revalidate: false },
  });
}

export async function fetchProjectFromCMS(
  slug: string,
  locale: string
): Promise<SpecificProject> {
  const url = `api/projects?filters[slug][$eq]=${slug}&populate[0]=lessons&populate[1]=challenges&populate[2]=repos&locale=${locale}`;
  const res = await fetchCMSContent(url).then((res) => res.json());
  const project = res.data[0] as SpecificProject;

  if (!project) {
    notFound();
  }

  return project;
}

export function logError(content: string): void {
  const date = new Date();
  console.error(`[${date.toISOString()}] ${chalk.red('error')} - ${content}`);
}

export function logInfo(content: string): void {
  const date = new Date();
  console.log(`[${date.toISOString()}] ${chalk.green('info')} - ${content}`);
}

export function unAuthorized(): Response {
  return new Response('Unauthorized', { status: 401 });
}

export function badRequest(): Response {
  return new Response('Bad Request', { status: 400 });
}

export function getLocaleByPath(path: string): Locale {
  return path.split('/')[1] as Locale;
}
