import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/toDoRecoil";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul className="sticky top-0 left-0 z-10 flex justify-between text-sm sm:text-base sm:justify-evenly items-center w-full text-white border-b border-white p-4 bg-gray-400 dark:bg-[#282828] transition-all duration-500">
      <li>Total Todos: {totalNum}</li>
      <li>Completed: {totalCompletedNum}</li>
      <li>Uncompleted: {totalUncompletedNum}</li>
    </ul>
  );
}

export default TodoListStats;
