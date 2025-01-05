export type StaticAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "static";
};

export type RandomAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "random";
};

export type BlinkAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "blink";
};

export type SwirlAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "swirl";
};

export type FlipAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "flip";
};

export type RotateAnswerError = {
  imageUrls: Array<string>;
  duration?: number;
  effect: "rotate";
};

export type AnswerError =
  | StaticAnswerError
  | RandomAnswerError
  | BlinkAnswerError
  | SwirlAnswerError
  | FlipAnswerError
  | RotateAnswerError;

export type MultipleAnswer = {
  type: "multiple";
  options: Array<{
    text: string;
    error?: AnswerError;
  }>;
};

export type TextAnswer = {
  type: "text";
  options: Array<string>;
  error: AnswerError;
};

export type EmailAnswer = {
  type: "email";
};

export type Answer = MultipleAnswer | TextAnswer | EmailAnswer;

export type Question = {
  question: {
    text: string;
    text2?: string;
  };

  answer: Answer;

  links: {
    next: string;
  };
};
