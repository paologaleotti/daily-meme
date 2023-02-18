import IconThumbUp from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/thumb-up.tsx";

type MemeProps = {
  subreddit: string;
  ups: number;
  imageURL: string;
  title: string;
  author: string;
};

export default function Meme(props: MemeProps) {
  const { imageURL, title, author, subreddit, ups } = props;
  return (
    <div class="flex flex-col items-center m-12">
      <h2 class="text-2xl">{title}</h2>
      <img
        class="h-auto w-full lg:w-96 md:w-96 my-4 border border-gray-600 "
        src={imageURL}
      />
      <div class="flex flex-row items-center text-gray-500">
        <p class="mx-2">Author: {author}</p>
        <p class="mx-2">Source: {subreddit}</p>
      </div>
      <div class="flex flex-row items-center my-4">
        <IconThumbUp class="w-5 h-5 mx-1" />
        <p>{ups}</p>
      </div>
    </div>
  );
}
