import { fetchPosts } from "https://deno.land/x/redditposts/src/mod.ts";

export type Post = {
  subreddit: string;
  ups: number;
  imageURL: string;
  title: string;
  author: string;
};

const MAX_POSTS_AMOUNT = 100;

export async function getPostsFromSubreddit(
  subreddit: string
): Promise<Post[]> {
  const posts: Post[] = await fetchPosts(subreddit, {
    amount: MAX_POSTS_AMOUNT,
    category: "hot",
  });
  return posts;
}

export function getRandomPostFromPool(pool: Post[]): Post {
  const randomInteger = Math.floor(Math.random() * (pool.length + 1));
  return pool[randomInteger];
}
