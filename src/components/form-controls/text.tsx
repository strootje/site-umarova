import { createSignal, Show } from "solid-js";
import { ImageEffect } from "~/components/image-effect.tsx";
import { AnswerError, TextAnswer } from "~/models.ts";

type Props = {
  answer: TextAnswer;
  onValidate: (valid: boolean) => void;
};

export const TextFormControl = ({ answer, onValidate }: Props) => {
  const [error, setError] = createSignal<AnswerError>();

  const handleValueChange = (
    { target }: Event & { target: HTMLInputElement },
  ) => {
    const isValid = !answer.options.includes(target.value);
    onValidate(!isValid);

    if (!isValid) {
      return;
    }

    setError(answer.error);
    setTimeout(() => setError(undefined), answer.error.duration ?? 3000);
  };

  return (
    <>
      <div class="flex flex-col justify-start">
        <input type="text" name="test" onchange={handleValueChange} />
      </div>

      <Show when={error()}>{(data) => <ImageEffect error={data()} />}</Show>
    </>
  );
};
