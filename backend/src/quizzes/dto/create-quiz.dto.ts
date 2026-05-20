import { CreateQuestionDto } from 'src/questions/dto/createQuestion.dto';

export class CreateQuizDto {
  title!: string;
  description: string | undefined;
  questions!: CreateQuestionDto[];
}
