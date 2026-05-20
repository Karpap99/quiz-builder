"use client";

import publicApi from "@/common/api/api";
import { QuizzShortcut } from "@/components/quizzShortcut/quizzShortcut";
import { Quiz } from "@/types/quiz";
import {  useEffect,  useState } from "react";

export default function QuizzesPage() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);

    const fetchQuizzes = async () => {
        const res = await publicApi.get("/quizzes");
        setQuizzes(res.data);
    }

    const handleDelete = (id: string) => {
        setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
    }

    useEffect(() => {
        const load = async () => {
            await fetchQuizzes();
        }
        load();

    }, []);
    return (
        <div>
            <main>
                <h1 className="text-2xl">
                    Quizzes:
                </h1>
                <div className="flex gap-2 w-full flex-wrap overflow-scroll-hidden">
                    {quizzes.map((quiz: Quiz) => (
                        <QuizzShortcut key={quiz.id} quiz={quiz} onDelete={() => handleDelete(quiz.id)} />
                    ))}
                    <a href="/create" className="flex items-center justify-center border-dashed border-2 rounded w-50 h-35">
                        <p className="text-gray-300 text-sm">Create new quiz</p>
                    </a>
                </div>
            </main>
        </div>
    );
}