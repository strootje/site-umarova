import { BlinkImageEffect } from "~/components/image-effects/blink-image.tsx";
import { FlipImageEffect } from "~/components/image-effects/flip-image.tsx";
import { RotateImageEffect } from "~/components/image-effects/rotate-image.tsx";
import { SwirlImageEffect } from "~/components/image-effects/swirl-image.tsx";

type Props = {
  src: string;
};

export const RandomImageEffect = ({ src }: Props) => {
  const test = Math.floor(Math.random() * 4);

  if (test === 0) {
    return <BlinkImageEffect src={src} />;
  } else if (test === 1) {
    return <SwirlImageEffect src={src} />;
  } else if (test === 2) {
    return <FlipImageEffect src={src} />;
  } else if (test === 3) {
    return <RotateImageEffect src={src} />;
  }
};
