"use client";
import publicApi from "@/common/api/api";
import { Quiz } from "@/types/quiz";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  const fetchQuiz = async () => {
    const res = await publicApi.get(`/quizzes/${id}`);
    setQuiz(res.data);
  };

  useEffect(() => {
    const load = async () => {
      await fetchQuiz();
    };
    load();
  }, [id]);

  return (
    <div>
      <main>
        <button
          onClick={() => navigation.navigate("/quizzes")}
          className="border p-2 rounded"
        >
          To list
        </button>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">{quiz?.title}</h2>
          <p className="text-gray-500 text-2xl">{quiz?.description}</p>
          <div>
            <h3 className="text-2xl">Questions:</h3>
            <div>
              {quiz?.questions?.map((question) => (
                <div
                  key={question.id}
                  className="border rounded mb-2 flex flex-col gap-2 w-175"
                >
                  <h4 className="text-lg font-bold bg-gray-200 p-2">
                    {question.title}
                  </h4>
                  <p>
                    Type: {question.type}
                  </p>
                  <div className=" flex flex-col gap-2">
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-blue-200"
                      >
                        <input
                          type={
                            question.type === "CHECKBOX" ? "checkbox" : "radio"
                          }
                          disabled
                          checked={option.isCorrect}
                        />
                        <label>{option.title}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
