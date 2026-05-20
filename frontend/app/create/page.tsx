"use client";

import publicApi from "@/common/api/api";
import { QuestionForm } from "@/components/quizzForm/questionForm";
import { CreateQuestionDto } from "@/types/question";
import { useState } from "react";

export default function CreateQuizPage() {
  const [questions, setQuestions] = useState<CreateQuestionDto[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(questions.length === 0) {
      alert("Quiz must have at least one question");
      return;
    }
    for (const question of questions) {
      if (question.options.length === 0) {
        alert("Each question must have at least one option");
        return;
      }
    }
    publicApi
      .post("/quizzes", {
        title,
        description,
        questions,
      })
      .then(() => {
        navigation.navigate("/quizzes");
      })
      .catch((err) => {alert(err.response.data.message)});
  };

  const handleAddQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        title: "",
        type: "CHECKBOX",
        options: [],
      },
    ]);
  };
  const handleQuestionChange = (
    index: number,
    updatedQuestion: CreateQuestionDto,
  ) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index] = updatedQuestion;
      return newQuestions;
    });
  };

  return (
    <div>
      <main className="flex flex-col items-center ">
        <h1>Quiz Creation Page</h1>
        <button
          onClick={() => navigation.navigate("/quizzes")}
          className="border p-2 rounded"
        >
          To list
        </button>
        <form className="flex flex-col gap-2 w-150" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="border p-2 rounded"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-col gap-1">
              {questions.map((question, index) => (
                <QuestionForm
                  key={index}
                  question={question}
                  onChange={(updatedQuestion) =>
                    handleQuestionChange(index, updatedQuestion)
                  }
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddQuestion}
              className="border w-full rounded-xl px-10 py-5 text-2xl"
            >
              Add Question
            </button>
          </div>

          <button
            type="submit"
            className="border w-full rounded-xl px-10 py-5 text-2xl"
          >
            Create Quiz
          </button>
        </form>
      </main>
    </div>
  );
}
