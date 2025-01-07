import { ListProject } from "@/app/types";
import { fetchCMSContent, fetchProjectFromCMS } from "@/app/utils";

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{
  slug: string;
}> {
  const projects = await fetchCMSContent("api/projects").then((res) =>
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
  const project = res.data[0];
  return (
    <>
      <main>
        <p>
          {project.name} {project.description}
        </p>
      </main>
    </>
  );
}
