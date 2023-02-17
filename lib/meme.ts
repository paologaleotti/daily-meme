import { fetchPosts } from "https://deno.land/x/redditposts/src/mod.ts";
import { POST_RETRIEVE_AMOUNT } from "./config.ts";
import { Post } from "./models.ts";

export async function getPostsFromSubreddit(
  subreddit: string
): Promise<Post[]> {
  const posts: Post[] = await fetchPosts(subreddit, {
    amount: POST_RETRIEVE_AMOUNT,
    category: "hot",
  });
  return posts;
}

export function getRandomPostFromPool(pool: Post[]): Post {
  const randomInteger = Math.floor(Math.random() * (pool.length + 1));
  return pool[randomInteger];
}
