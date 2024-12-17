import { action, query } from "@solidjs/router";
import { createResource, Show, Suspense } from "solid-js";

type Question = {
  question: string;
  answer: string;
};

const getAllQuestions = query(
  async () => {
    const resp = await fetch("http://localhost:3000/data/questions.json");
    const result = (await resp.json()) as { data: Array<Question> };
    return result.data;
  },
  "data:questions",
);

export default function HomePage() {
  const [question, { refetch }] = createResource(async () => {
    const questions = await getAllQuestions();
    return questions.at(Math.floor(Math.random() * questions.length));
  });

  const submitQuestion = action(async () => {
    refetch();
  }, "submit:question");

  return (
    <main class="flex flex-col items-center bg-gradient-to-b from-blue-200 to-white p-8 w-full grow">
      <Suspense>
        <Show when={question()}>
          {(data) => (
            <>
              <div>{data().question}</div>

              <form
                class="flex flex-col items-center gap-2 w-full"
                method="post"
              >
                <input
                  class="w-full b-2 b-solid b-stone-600"
                  value={data().answer}
                  type="text"
                />

                <button
                  class="bg-min px-2 py-1 rounded text-white"
                  formAction={submitQuestion}
                  type="submit"
                >
                  Klik volgende
                </button>
              </form>
            </>
          )}
        </Show>
      </Suspense>
    </main>
  );
}
