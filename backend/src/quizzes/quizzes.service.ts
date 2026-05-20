import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prismaService: PrismaService) {}
  async createQuiz(createQuizDto: CreateQuizDto) {
    const res = await this.prismaService.quiz.create({
      data: {
        title: createQuizDto.title,
        description: createQuizDto.description,
        questions: {
          create: createQuizDto.questions.map((question) => ({
            title: question.title,
            type: question.type,
            options: {
              create: question.options.map((option) => ({
                title: option.title,
                isCorrect: option.isCorrect,
              })),
            },
          })),
        },
      },
    });
    return res;
  }

  async getQuizzes() {
    const res = await this.prismaService.quiz.findMany();
    return res;
  }

  async getQuizById(id: string) {
    const res = await this.prismaService.quiz.findUnique({
      where: {
        id,
      },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
    return res;
  }

  async deleteQuiz(id: string) {
    const res = await this.prismaService.quiz.delete({
      where: {
        id,
      },
    });
    return res;
  }
}
