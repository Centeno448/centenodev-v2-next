# Centenodev V2 Next.js

Next.js frontend for [centenodev.com](https://www.centenodev.com/). Content is fed by a headless [Strapi CMS](https://github.com/Centeno448/centenodev-v2-strapi)

## Running

Install dependencies running `npm install` and run in development mode with `npm run dev`

Requires the following environment variables to be present in a `.env` file:

```bash
CMS_BASE_URL="base url to headless CMS (Strapi)"
CMS_API_KEY="Strapi CMS api key"
CMS_REVALIDATION_TOKEN="key used to invalidate a cached page on demand from the Strapi CMS"
```
