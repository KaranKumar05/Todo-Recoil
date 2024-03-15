import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/toDoRecoil";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { themeState } from "../recoil/toDoRecoil";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const theme = useRecoilValue(themeState);

  function formatDate(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const currentDate = new Date();

  const addItem = () => {
    if (inputValue == "") {
      if (theme) {
        toast.error("Input Field is Requried.");
      } else {
        toast("Input Field is Requried.", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      return;
    }
    const new_todo = {
      id: getId(),
      text: inputValue,
      isComplete: false,
      date: formatDate(currentDate),
    };

    setTodoList((oldTodoList) => [...oldTodoList, new_todo]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    //if input  is empty alter Text is requried

    setInputValue(value);
  };
  //Saving Todo to Local Storage
  // useEffect(() => {
  //   const todoList = JSON.parse(localStorage.getItem("todoList"));
  //   if (todoList && todoList.length > 0) {
  //     setTodoList(todoList);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todoList", JSON.stringify(todoList));
  // }, [todoList]);

  return (
    <>
      <div className="z-50">
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>

      <div className="flex items-center gap-1 w-full md:w-fit">
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new task"
          required
          className="dark:bg-[#282828] bg-gray-400 placeholder:text-white border-none outline-none text-white p-2 px-4 md:w-96 w-full rounded-md transition-all duration-500"
          onChange={onChange}
        />
        <button
          className="text-white  shadow-md rounded-md p-2 dark:bg-[#282828] bg-gray-500 transition-all duration-500"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
export default TodoItemCreator;
