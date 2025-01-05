type Props = {
  src: string;
};

export const StaticImageEffect = ({ src }: Props) => {
  return (
    <img
      class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
      src={src}
    />
  );
};
