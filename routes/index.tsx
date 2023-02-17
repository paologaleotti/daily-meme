import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Meme from "../components/Meme.tsx";
import { getRandomPool, getRandomPostFromSubreddit } from "../lib/meme.ts";
import { Post } from "../lib/models.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const pool = getRandomPool();
    const selectedPost = await getRandomPostFromSubreddit(pool).catch(
      () => undefined
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
      <div class="flex flex-wrap flex-col items-center p-4 lg:p-12">
        <h1 class="text-3xl	font-bold">Daily meme</h1>
        <Meme {...props.data} />
      </div>
    </>
  );
}
