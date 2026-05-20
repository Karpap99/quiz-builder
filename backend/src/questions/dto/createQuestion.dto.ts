import { CreateOptionDto } from 'src/options/dto/create-option.dto';

export class CreateQuestionDto {
  title!: string;
  type!: 'BOOLEAN' | 'INPUT' | 'CHECKBOX';
  options!: CreateOptionDto[];
}
