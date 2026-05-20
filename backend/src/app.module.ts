import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [QuizzesModule, QuestionsModule, OptionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
