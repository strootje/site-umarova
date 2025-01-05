import { onMount } from "solid-js";

type Props = {
  onValidate: (valid: boolean) => void;
};

export const EmailFormControl = ({ onValidate }: Props) => {
  onMount(() => {
    onValidate(true);
  });

  return (
    <div class="flex flex-col justify-start">
      <textarea class="w-full min-h-40"></textarea>
    </div>
  );
};
