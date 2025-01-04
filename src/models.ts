export type MultipleAnswer = {
  type: "multiple";
  options: Array<{
    text: string;
    errorImageUrl?: string;
  }>;
};

export type Question = {
  question: {
    text: string;
  };

  answer: MultipleAnswer;

  links: {
    next: string;
  };
};
