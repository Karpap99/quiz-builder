import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  createQuiz(@Body() CreateQuizDto: CreateQuizDto) {
    return this.quizzesService.createQuiz(CreateQuizDto);
  }

  @Get()
  getQuizzes() {
    return this.quizzesService.getQuizzes();
  }

  @Get(':id')
  getQuizById(@Param('id') id: string) {
    return this.quizzesService.getQuizById(id);
  }

  @Delete(':id')
  deleteQuiz(@Param('id') id: string) {
    return this.quizzesService.deleteQuiz(id);
  }
}
