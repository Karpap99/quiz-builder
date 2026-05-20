export interface Options {
  id: number;
  questionId: number;
  title: string;
  isCorrect: boolean;
}

export interface CreateOptionDto {
  title: string;
  isCorrect: boolean;
}