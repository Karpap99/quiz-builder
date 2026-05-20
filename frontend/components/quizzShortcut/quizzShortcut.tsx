import publicApi from "@/common/api/api";
import { Quiz } from "@/types/quiz";

export const QuizzShortcut = ({ quiz, onDelete }: { quiz: Quiz; onDelete: () => void }) => {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this quiz?")) {
      publicApi.delete(`/quizzes/${quiz.id}`).then(() => {
        alert("Quiz deleted successfully");
        onDelete();
      });
    }
  };
  return (
    <div
      className="flex flex-col gap-2 border p-2 rounded mb-2 w-50 h-35"
     
    >
      <div className="flex flex-col gap-2 overflow-scroll-hidden"  onClick={() => navigation.navigate(`quizzes/${quiz.id}`)}>
        <div>
          <p className="text-gray-300 text-sm ">Quizz title:</p>
          <h2 className="text-2xl font-bold leading-none">{quiz.title}</h2>
        </div>

        <div>
          <p className="text-gray-300 text-sm">Quizz description:</p>
          <p className="leading-none">{quiz.description}</p>
        </div>
      </div>

      <button
        type="button"
        className="bg-red-500 text-white rounded px-2 py-1 mt-auto"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
