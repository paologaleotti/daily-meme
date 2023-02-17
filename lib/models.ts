export type Post = {
  subreddit: string;
  ups: number;
  imageURL: string;
  title: string;
  author: string;
};

export type RedditPost = {
  subreddit: string;
  title: string;
  author: string;
  url_overridden_by_dest: string;
  ups: number;
};

export type RedditPostResponseChildren = {
  data: RedditPost;
};

export type RedditPostResponse = {
  data: {
    children: RedditPostResponseChildren[];
  };
};

export type RedditResponse = RedditPostResponse[];
