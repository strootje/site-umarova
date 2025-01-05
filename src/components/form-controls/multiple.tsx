import { createSignal, For, Show } from "solid-js";
import { ImageEffect } from "~/components/image-effect.tsx";
import { Marked } from "~/components/marked.tsx";
import { AnswerError, MultipleAnswer } from "~/models.ts";

type Props = {
  answer: MultipleAnswer;
  onValidate: (valid: boolean) => void;
};

export const MultipleFormControl = ({ answer, onValidate }: Props) => {
  const [error, setError] = createSignal<AnswerError>();

  const handleValueChange = (
    { error }: MultipleAnswer["options"][number],
  ) => {
    onValidate(!error);

    if (!error) {
      return;
    }

    setError(error);
    setTimeout(() => setError(undefined), error.duration ?? 3000);
  };

  return (
    <>
      <div class="flex flex-col justify-start gap-4">
        <For each={answer.options}>
          {(option) => (
            <label class="flex flex-row items-baseline gap-2">
              <input
                type="radio"
                name="test"
                onchange={() => handleValueChange(option)}
              />
              <Marked data={option.text} />
            </label>
          )}
        </For>
      </div>

      <Show when={error()}>{(data) => <ImageEffect error={data()} />}</Show>
    </>
  );
};
