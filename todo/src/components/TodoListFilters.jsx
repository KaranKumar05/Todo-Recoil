import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/toDoRecoil";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div className="flex text-white gap-1 shadow-md rounded-md items-center px-2 dark:bg-[#282828] bg-gray-400 transition-all duration-500">
      <label htmlFor="filter"> Cate:</label>
      <select
        className="dark:bg-[#282828] bg-gray-400 outline-none py-2 border-none transition-all duration-500"
        id="filter"
        value={filter}
        onChange={updateFilter}
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
      
    </div>
  );
}
export default TodoListFilters;
