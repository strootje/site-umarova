import { createSignal, onMount } from "solid-js";

type Props = {
  onValidate: (valid: boolean) => void;
  handleSubmit: (action: () => Promise<void>) => void;
};

export const EmailFormControl = ({ onValidate, handleSubmit }: Props) => {
  const [message, setMessage] = createSignal("");
  onMount(() => {
    onValidate(false);
    handleSubmit(async () => {
      try {
        const text = message();
        if (text.length > 3) {
          const data = new FormData();
          data.append("message", text);
          const resp = await fetch("https://formspree.io/f/mdkkpbvv", {
            redirect: "manual",
            method: "post",
            body: data,
          });
          console.log("resp", resp);
        }
      } finally {
        onValidate(true);
      }
    });
  });

  return (
    <div class="flex flex-col justify-start">
      <textarea
        class="w-full min-h-40"
        onchange={(evt) => setMessage(evt.target.value ?? "")}
      >
      </textarea>
    </div>
  );
};
