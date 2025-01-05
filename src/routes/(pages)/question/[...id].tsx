import { action, query, redirect, useParams } from "@solidjs/router";
import { createResource, createSignal, Show, Suspense } from "solid-js";
import { FormControl } from "~/components/form-control.tsx";
import { Marked } from "~/components/marked.tsx";
import { Question } from "~/models.ts";

const getAllQuestions = query(
  async () => {
    const resp = await fetch("/site-umarova/data/questions2.json");
    const result = (await resp.json()) as { data: Array<Question> };
    return result.data;
  },
  "data:questions",
);

export default function QuestionByIdPage() {
  const { id } = useParams();
  const [question, { refetch }] = createResource(async () => {
    const questions = await getAllQuestions();
    return questions.at(Number.parseInt(id) - 1);
  });

  const [isValid, setIsvalid] = createSignal(false);
  const handleSubmit = action(async (next: string) => {
    console.log("submit", "valid", isValid(), next);
    if (isValid()) {
      return redirect(next);
    }

    return Promise.resolve();
  });

  return (
    <Suspense>
      <Show when={question()}>
        {(data) => (
          <main class="flex flex-col gap-4 bg-purple2 w-full font-rijksoverheid grow">
            <header class="bg-purple1 text-white">
              <h1 class="px-6 py-4 text-xl">
                <Marked data={data().question.text} />
              </h1>
            </header>

            <Show when={data().question.text2}>
              {(text2) => (
                <h2 class="px-10 text-purple1">
                  <Marked data={text2()} />
                </h2>
              )}
            </Show>

            <form
              class="flex flex-col gap-4 mb-4 px-10 text-purple1 grow"
              method="post"
            >
              <div class="grow">
                <FormControl
                  answer={() => data().answer}
                  onValidate={setIsvalid}
                />
              </div>

              <Show when={data().links.next}>
                <button
                  class="bg-min px-4 py-2 rounded font-bold text-white self-center"
                  formaction={handleSubmit.with(data().links.next)}
                  type="submit"
                >
                  Volgende
                </button>
              </Show>
            </form>
          </main>
        )}
      </Show>
    </Suspense>
  );
}
