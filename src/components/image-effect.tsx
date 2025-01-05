import { Match, Switch } from "solid-js";
import { BlinkImageEffect } from "~/components/image-effects/blink-image.tsx";
import { FlipImageEffect } from "~/components/image-effects/flip-image.tsx";
import { RandomImageEffect } from "~/components/image-effects/random-image.tsx";
import { RotateImageEffect } from "~/components/image-effects/rotate-image.tsx";
import { StaticImageEffect } from "~/components/image-effects/static-image.tsx";
import { SwirlImageEffect } from "~/components/image-effects/swirl-image.tsx";
import { AnswerError } from "~/models.ts";

type Props = {
  error: AnswerError;
};

export const ImageEffect = ({ error }: Props) => {
  const { effect, imageUrls } = error;
  const imageUrl = () =>
    "/site-umarova/" + imageUrls[Math.floor(Math.random() * imageUrls.length)];

  return (
    <Switch>
      <Match when={effect === "static"}>
        <StaticImageEffect src={imageUrl()} />
      </Match>

      <Match when={effect === "random"}>
        <RandomImageEffect src={imageUrl()} />
      </Match>

      <Match when={effect === "blink"}>
        <BlinkImageEffect src={imageUrl()} />
      </Match>

      <Match when={effect === "swirl"}>
        <SwirlImageEffect src={imageUrl()} />
      </Match>

      <Match when={effect === "flip"}>
        <FlipImageEffect src={imageUrl()} />
      </Match>

      <Match when={effect === "rotate"}>
        <RotateImageEffect src={imageUrl()} />
      </Match>
    </Switch>
  );
};
