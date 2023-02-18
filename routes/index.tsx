import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import DailyMeme from "../islands/DailyMeme.tsx";
import { getRandomPool, getRandomPostFromSubreddit } from "../lib/meme.ts";
import { Post } from "../lib/models.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const pool = getRandomPool();
    const selectedPost = await getRandomPostFromSubreddit(pool).catch(
      async () => await getRandomPostFromSubreddit("memes")
    );

    return ctx.render(selectedPost);
  },
};

export default function Home(props: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>daily meme</title>
      </Head>
      <DailyMeme initialPost={props.data} />
    </>
  );
}
