const API_KEY = process.env.CMS_API_KEY;

export async function fetchCMSContent(url: string)
{
    return fetch(url, {headers: {"Authorization": `Bearer ${API_KEY}`}});
}