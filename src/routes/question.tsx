import { A } from "@solidjs/router";
import type { ParentProps } from "solid-js";
import { Header } from "~/components/header.tsx";

export default function QuestionsLayout({ children }: ParentProps) {
  return (
    <div class="flex flex-col items-center gap-12 min-h-dvh font-rijksoverheid">
      <A href="/">
        <Header />
      </A>

      {children}
    </div>
  );
}
