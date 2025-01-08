import { revalidatePath } from "next/cache";
import { badRequest, logError, logInfo, unAuthorized } from "../utils";

const REVALIDATION_TOKEN = process.env.CMS_REVALIDATION_TOKEN;

export async function POST(request: Request): Promise<Response> {
  const authHeader = request.headers.get("authorization");

  if (!REVALIDATION_TOKEN) {
    logError("No revalidation token is configured!");
    return unAuthorized();
  }

  if (!authHeader) {
    return unAuthorized();
  }

  if (
    authHeader.toLowerCase() != `bearer ${REVALIDATION_TOKEN.toLowerCase()}`
  ) {
    return unAuthorized();
  }

  const path = await request
    .json()
    .then((res: { path: string | null }) => res.path);

  if (!path) {
    return badRequest();
  }

  logInfo(`Revalidating path ${path}`);
  revalidatePath(path, "page");

  return Response.json({ result: "OK" });
}
