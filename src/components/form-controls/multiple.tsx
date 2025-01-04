import { createSignal, For, Show } from "solid-js";
import { BlinkImageEffect } from "~/components/image-effects/blink-image.tsx";
import { MultipleAnswer } from "~/models.ts";

type Props = {
  answer: MultipleAnswer;
  onValidate: (valid: boolean) => void;
};

export const MultipleFormControl = ({ answer, onValidate }: Props) => {
  const [errorImage, setErrorImage] = createSignal<string>();

  const handleValueChange = (
    { errorImageUrl }: MultipleAnswer["options"][number],
  ) => {
    onValidate(!errorImageUrl);

    if (!errorImageUrl) {
      return;
    }

    setErrorImage(`/site-umarova/${errorImageUrl}`);
    setTimeout(() => setErrorImage(undefined), 3000);
  };

  return (
    <>
      <div class="flex flex-col justify-start">
        <For each={answer.options}>
          {(option) => (
            <label>
              <input
                type="radio"
                name="test"
                onchange={() => handleValueChange(option)}
              />
              <span>{option.text}</span>
            </label>
          )}
        </For>
      </div>

      <Show when={errorImage()}>
        {(src) => <BlinkImageEffect src={src()} />}
      </Show>
    </>
  );
};
