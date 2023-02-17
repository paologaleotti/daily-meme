type MemeProps = {
  subreddit: string;
  ups: number;
  imageURL: string;
  title: string;
  author: string;
};

export default function Meme(props: MemeProps) {
  const { imageURL, title, author, subreddit } = props;
  return (
    <div class="flex flex-col items-center m-12">
      <h2 class="text-2xl">{title}</h2>
      <img class="h-auto w-96 m-6 border border-gray-600" src={imageURL} />
      <p>Author: {author}</p>
      <p>Source: r/{subreddit}</p>
    </div>
  );
}
