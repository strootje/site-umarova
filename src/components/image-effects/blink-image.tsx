import { Motion } from "solid-motionone";

type Props = {
  src: string;
};

export const BlinkImageEffect = ({ src }: Props) => {
  return (
    <Motion.img
      class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
      animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }}
      transition={{ duration: 3, easing: "linear" }}
      src={src}
    />
  );
};
