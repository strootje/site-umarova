import { parse } from "marked";

type Props = {
  data: string;
};

export const Marked = ({ data }: Props) => {
  return <span innerHTML={parse(data).toString()} />;
};
