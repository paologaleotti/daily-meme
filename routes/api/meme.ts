import { HandlerContext } from "$fresh/server.ts";
import { getRandomPool, getRandomPostFromSubreddit } from "../../lib/meme.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  const pool = getRandomPool();
  const selectedPost = await getRandomPostFromSubreddit(pool).catch(
    async () => await getRandomPostFromSubreddit("memes")
  );
  return new Response(JSON.stringify(selectedPost));
};
