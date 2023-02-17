export type Post = {
  subreddit: string;
  ups: number;
  imageURL: string;
  title: string;
  author: string;
};

export type RedditPost = {
  subreddit_name_prefixed: string;
  title: string;
  author: string;
  url: string;
  ups: number;
};
