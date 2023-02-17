import { MEME_POOLS } from "./config.ts";
import { Post, RedditPost, RedditResponse } from "./models.ts";

function parseRedditPost(post: RedditPost): Post {
  const { author, subreddit, title, ups, url_overridden_by_dest } = post;
  return {
    imageURL: url_overridden_by_dest,
    author,
    subreddit,
    title,
    ups,
  };
}

export async function getRandomPostFromSubreddit(
  subreddit: string
): Promise<Post> {
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/random.json`
  );

  const rawPost: RedditResponse = await response.json();
  const data = rawPost[0]?.data?.children;
  if (!data) throw new Error("data1");

  const post = data.find((el) => el.data.url_overridden_by_dest)?.data;
  if (!post) throw new Error("data2");

  return parseRedditPost(post);
}

export function getRandomPool(): string {
  const randomInteger = Math.floor(Math.random() * (MEME_POOLS.length + 1));
  return MEME_POOLS[randomInteger];
}
