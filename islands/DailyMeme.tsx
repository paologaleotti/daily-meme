import { useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import Meme from "../components/Meme.tsx";
import Spinner from "../components/Spinner.tsx";
import { Post } from "../lib/models.ts";

export default function DailyMeme(props: { initialPost: Post }) {
  const [post, setPost] = useState<Post>(props.initialPost);
  const [loading, setLoading] = useState(false);

  function fetchMeme() {
    setLoading(true);

    fetch("/api/meme")
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
        setLoading(false);
      });
  }

  return (
    <div class="flex flex-wrap flex-col items-center justify-center p-4 lg:p-12 overflow-x-hidden">
      <h1 class="text-center text-4xl	font-bold mb-8">Daily meme</h1>
      <Button onClick={fetchMeme} text="Refresh" />

      {loading ? <Spinner class="my-32" /> : <Meme {...post} />}
    </div>
  );
}
