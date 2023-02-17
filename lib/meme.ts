import { MEME_POOLS } from "./config.ts";
import { Post, RedditPost } from "./models.ts";
import { randomPost } from "npm:simple-reddit-api";

function parseRedditPost(post: RedditPost): Post {
  const { author, subreddit_name_prefixed, title, ups, url } = post;
  return {
    imageURL: url,
    author,
    subreddit: subreddit_name_prefixed,
    title,
    ups,
  };
}

export async function getRandomPostFromSubreddit(
  subreddit: string
): Promise<Post> {
  const response = await randomPost({ subreddit: subreddit });
  const post = response.posts[0].data;
  return parseRedditPost(post);
}

export function getRandomPool(): string {
  const randomInteger = Math.floor(Math.random() * (MEME_POOLS.length + 1));
  return MEME_POOLS[randomInteger];
}
