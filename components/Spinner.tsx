import IconLoader from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/loader-2.tsx";

export default function Spinner(props: { class?: string }) {
  return <IconLoader class={`${props.class} w-10 h-10 animate-spin`} />;
}
