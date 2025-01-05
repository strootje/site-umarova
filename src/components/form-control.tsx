import { type Accessor, Match, Switch } from "solid-js";
import { EmailFormControl } from "~/components/form-controls/email.tsx";
import { MultipleFormControl } from "~/components/form-controls/multiple.tsx";
import { TextFormControl } from "~/components/form-controls/text.tsx";
import { Answer, MultipleAnswer, TextAnswer } from "~/models.ts";

type Props = {
  answer: Accessor<Answer>;
  onValidate: (valid: boolean) => void;
};

export const FormControl = ({ answer, onValidate }: Props) => {
  return (
    <Switch fallback={<p>not implemented yet..</p>}>
      <Match when={answer().type === "multiple"}>
        <MultipleFormControl
          answer={answer() as MultipleAnswer}
          onValidate={onValidate}
        />
      </Match>

      <Match when={answer().type === "text"}>
        <TextFormControl
          answer={answer() as TextAnswer}
          onValidate={onValidate}
        />
      </Match>

      <Match when={answer().type === "email"}>
        <EmailFormControl
          answer={answer() as TextAnswer}
          onValidate={onValidate}
        />
      </Match>
    </Switch>
  );
};
