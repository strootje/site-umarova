import { action, query } from "@solidjs/router";
import { createResource, createSignal, Show, Suspense } from "solid-js";
import { Motion } from "solid-motionone";

type Question = {
  question: string;
  answer: string;
};

const getAllQuestions = query(
  async () => {
    const resp = await fetch("/site-umarova/data/questions.json");
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

  const [errorImage, setErrorImage] = createSignal<string>();

  const submitQuestion = action(async (question: Question, data: FormData) => {
    const userInput = data.get("user_input") ?? "";

    if (question.answer !== userInput) {
      const random = Math.floor(Math.random() * 8) + 1;

      setErrorImage(`/site-umarova/images/error${random}.jpg`);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setErrorImage(undefined);
    }

    refetch();
  }, "submit:question");

  return (
    <main class="flex flex-col items-center bg-purple2 p-8 w-full grow">
      <Suspense>
        <Show when={question()}>
          {(data) => (
            <>
              <div class="flex flex-col items-center gap-4 w-full md:max-w-1/2 text-center">
                <div>{data().question}</div>

                <form
                  class="flex flex-col items-center gap-2 w-full"
                  method="post"
                >
                  <input
                    name="user_input"
                    class="px-4 py-2 rounded w-full b-2 b-min b-solid"
                    placeholder="Vul hier je antwoord in"
                    type="text"
                  />

                  <button
                    class="bg-min px-4 py-2 rounded text-white"
                    formAction={submitQuestion.with(data())}
                    type="submit"
                  >
                    Klik volgende
                  </button>
                </form>
              </div>
            </>
          )}
        </Show>
      </Suspense>

      <Show when={errorImage()}>
        {(src) => (
          <Motion.img
            class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }}
            transition={{ duration: 3, easing: "linear" }}
            src={src()}
          />
        )}
      </Show>
    </main>
  );
}
