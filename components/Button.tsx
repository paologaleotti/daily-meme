export default function Button(props: { text: string; onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed"
    >
      {props.text}
    </button>
  );
}
