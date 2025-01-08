import chalk from "chalk";

const API_KEY = process.env.CMS_API_KEY;
const BASE_URL = process.env.CMS_BASE_URL;

export async function fetchCMSContent(path: string)
{
    return fetch(`${BASE_URL}/${path}`, {headers: {"Authorization": `Bearer ${API_KEY}`}});
}

export async function fetchProjectFromCMS(slug: string)
{
    return fetchCMSContent(`api/projects?filters[slug][$eq]=${slug}&populate[0]=lessons&populate[1]=lessons.item&populate[2]=challenges&populate[3]=challenges.item`);
}

export function logError(content: string) : void
{
    const date = new Date();
    console.error(`[${date.toISOString()}] ${chalk.red("error")} - ${content}`);
}

export function logInfo(content: string) : void
{
    const date = new Date();
    console.error(`[${date.toISOString()}] ${chalk.green("info")} - ${content}`);
}

export function unAuthorized() : Response
{
    return new Response("Unauthorized", { status: 401 });
}

export function badRequest() : Response
{
    return new Response("Bad Request", { status: 400 });
}
