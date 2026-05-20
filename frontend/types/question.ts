import { CreateOptionDto, Options } from "./options";

export interface Question {
  id: number;
  quizId: number;
  title: string;
  type: "BOOLEAN" | "INPUT" | "CHECKBOX";
  options: Options[];
  correctOptionIndex: number;
}

export interface CreateQuestionDto {
  title: string;
  type: "BOOLEAN" | "INPUT" | "CHECKBOX";
  options: CreateOptionDto[];
}