import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/toDoRecoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import ThemeBtn from "./ThemeBtn";
import BackToTop from "./BackToTop";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const [isVisible, setIsVisible] = useState("hidden opacity-0");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      setIsVisible("flex opacity-100");
    } else {
      setIsVisible("hidden opacity-0");
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <TodoListStats />
      <div className="sticky top-10 left-0 flex sm:flex-row flex-col items-center gap-2 sm:gap-5 dark:bg-[#3C3C3C] bg-gray-300 w-full justify-center p-5 border-b dark:border-white border-gray-300 transition-all duration-500">
        <TodoItemCreator />
        <span className="flex gap-2">
          <TodoListFilters />
          <ThemeBtn />
        </span>
      </div>

      <div className="mt-2 flex flex-col gap-2 md:w-[42rem] w-full">
        {todoList
          .map((todoItem) => <TodoItem item={todoItem} key={todoItem.id} />)
          .reverse()}
      </div>
      <div>
        <button className={`${isVisible}`} onClick={scrollToTop}>
          <BackToTop />
        </button>
      </div>
    </div>
  );
}
export default TodoList;
