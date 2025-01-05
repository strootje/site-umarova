import { Motion } from "solid-motionone";

type Props = {
  src: string;
};

export const FlipImageEffect = ({ src }: Props) => {
  return (
    <div class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
      <Motion.img
        animate={{
          rotateY: [
            0,
            90,
            180,
            270,
            360,
            360 + 90,
            360 + 180,
            360 + 270,
            360 * 2,
          ],
        }}
        transition={{ duration: 3, easing: "linear" }}
        src={src}
      />
    </div>
  );
};
