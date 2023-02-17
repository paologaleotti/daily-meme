import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Meme from "../components/Meme.tsx";
import { MEME_POOLS } from "../lib/config.ts";
import { getPostsFromSubreddit, getRandomPostFromPool } from "../lib/meme.ts";
import { Post } from "../lib/models.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const memes = await Promise.all(
      MEME_POOLS.map((pool) => getPostsFromSubreddit(pool))
    );

    const pool = memes.flat();

    const selectedPost = getRandomPostFromPool(pool);
    return ctx.render(selectedPost);
  },
};

export default function Home(props: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>daily meme</title>
      </Head>
      <div class="flex flex-wrap flex-col items-center p-4 lg:p-12">
        <h1 class="text-3xl	font-bold">Daily meme</h1>
        <Meme {...props.data} />
      </div>
    </>
  );
}
