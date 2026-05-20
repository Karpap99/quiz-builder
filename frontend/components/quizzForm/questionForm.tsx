"use client";
import { CreateQuestionDto } from "@/types/question";
import { useEffect, useState } from "react";

interface Props {
  question: CreateQuestionDto;
  onChange?: (updatedQuestion: CreateQuestionDto) => void;
}

export const QuestionForm = ({ question, onChange }: Props) => {
  const [quizTitle, setQuizTitle] = useState(question.title);
  const [quizType, setQuizType] = useState<"BOOLEAN" | "INPUT" | "CHECKBOX">(
    question.type,
  );
  const [options, setOptions] = useState<
    { title: string; isCorrect: boolean }[]
  >(question.options);

  const handleAddOption = () => {
    if (quizType === "CHECKBOX") {
      setOptions((prev) => [...prev, { title: "", isCorrect: false }]);
    }
  };

  useEffect(() => {
    onChange?.({
      title: quizTitle,
      type: quizType,
      options,
    });
  }, [quizTitle, quizType, options, onChange]);

  const hadleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as "BOOLEAN" | "INPUT" | "CHECKBOX";

    setQuizType(newType);
    if (newType === "BOOLEAN") {
      setOptions([
        { title: "True", isCorrect: true },
        { title: "False", isCorrect: false },
      ]);
    } else if (newType === "INPUT") {
      setOptions([{ title: "", isCorrect: true }]);
    } else if (newType === "CHECKBOX") {
      setOptions([{ title: "", isCorrect: false }]);
    }

  };

  const handleSetCorrectOption = (index: number, isCorrect: boolean) => {
    if(quizType === "BOOLEAN") {
      options.forEach((option, i) => {
        option.isCorrect = i === index ? isCorrect : false;
      });
      setOptions([...options]);
    } else {
      setOptions((prev) => {
        const newOptions = [...prev];
        newOptions[index].isCorrect = isCorrect;
        return newOptions;
      });
    }
  };

  const handleRemoveOption = (index: number) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  }


  return (
    <div className="flex flex-col bg-gray-100 shadow p-2 gap-2 w-150 border">
      <div className="flex flex-col">
        <h2>Title:</h2>
        <input
          type="text"
          className="border p-2 rounded bg-white"
          placeholder="Title"
          required
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
      </div>

      <div>
        <h2>Type:</h2>
        <select
          className="border p-2 rounded bg-white"
          required
          value={quizType}
          onChange={hadleTypeChange}
        >
          <option value="BOOLEAN">True/False</option>
          <option value="INPUT">Short Answer</option>
          <option value="CHECKBOX">Multiple choice</option>
        </select>
      </div>

      <div className=" flex flex-col gap-1">
        {options.map((option, index) => (
          <div
            key={index}
            className="border p-1 rounded flex flex-col gap-1 relative"
          >
            {quizType === "CHECKBOX" && (
              <button type="button" className="absolute right-0 px-1" onClick={() => handleRemoveOption(index)}>
                x
              </button>
            )}
            <p>Answer</p>
            <input
              type="text"
              value={option.title}
              className="border p-2 rounded"
              onChange={(e) => {
                option.title = e.target.value;
                setOptions([...options]);
              }}
              {...(quizType === "BOOLEAN" && { readOnly: true })}
            />
            <div className="flex gap-2">
              <p>correct:</p>
              <input type="checkbox" checked={option.isCorrect} onChange={(e) => handleSetCorrectOption(index, e.target.checked)} />
            </div>
          </div>
        ))}
        {quizType === "CHECKBOX" && (
          <button
            type="button"
            onClick={handleAddOption}
            className="border rounded-l py-2 text-1xl bg-white"
          >
            Add Option
          </button>
        )}
      </div>
    </div>
  );
};
