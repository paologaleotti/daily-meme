import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {
  getPostsFromSubreddit,
  getRandomPostFromPool,
  Post,
} from "../lib/meme.ts";
import Meme from "../components/Meme.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const memes = await Promise.all([
      getPostsFromSubreddit("memes"),
      getPostsFromSubreddit("dankmemes"),
      getPostsFromSubreddit("nukedmemes"),
    ]);

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
      <div class="flex flex-col items-center p-12">
        <h1 class="text-3xl	font-bold">Daily meme</h1>
        <Meme {...props.data} />
      </div>
    </>
  );
}
