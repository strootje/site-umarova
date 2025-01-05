import { parse } from "marked";

type Props = {
  data: string;
};

export const Marked = ({ data }: Props) => {
  return <span class="inline-block" innerHTML={parse(data).toString()} />;
};
