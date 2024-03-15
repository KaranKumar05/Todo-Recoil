import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/toDoRecoil";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit, CiSaveDown2 } from "react-icons/ci";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [updatedDate, setUpdateDate] = useState(false);
  const index = todoList.findIndex((listItem) => listItem === item);

  const [editTodo, setEditTodo] = useState(true);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

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

  const saveEditedItem = () => {
    setEditTodo(!editTodo);
    let time = new Date().toLocaleString();
    setUpdateDate(time);
  };

  return (
    <>
      <div className=" dark:bg-[#282828] bg-gray-400 p-3 rounded-md shadow-md w-[94%] md:w-[100%] mx-auto flex flex-col transition-all duration-500">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={toggleItemCompletion}
              disabled={!editTodo}
              className=" text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-full cursor-pointer"
            />
            <input
              type="text"
              value={item.text}
              onChange={editItemText}
              required
              className={`bg-transparent w-full  sm:w-96 text-white uppercase px-3 p-1 ${
                item.isComplete ? "line-through" : ""
              }${!editTodo ? "border-[#3C3C3C] border" : ""}`}
              disabled={editTodo}
            />
          </span>
          {!editTodo ? (
            <button
              onClick={() => saveEditedItem()}
              className="text-xl dark:bg-[#3C3C3C] bg-gray-500 text-white p-2 rounded-md shadow-md transition-all duration-500"
            >
             <HiOutlineSave />
            </button>
          ) : (
            <span className="flex gap-2">
              <button
                onClick={() => setEditTodo(!editTodo)}
                className={`text-xl dark:bg-[#3C3C3C] bg-gray-500 text-white p-2 rounded-md shadow-md transition-all duration-500`}
                disabled={item.isComplete}
              >
                <FaRegEdit />
              </button>
              <button
                className="text-xl dark:bg-[#3C3C3C] bg-gray-500 text-white p-2 rounded-md shadow-md transition-all duration-500"
                onClick={deleteItem}
              >
                <MdDeleteOutline />
              </button>
            </span>
          )}
        </div>
        <span className="flex justify-between flex-col sm:flex-row">
          <p className="text-sm text-white">Created On: {item.date}</p>
          {updatedDate ? (
            <p className="text-sm text-white">Updated: {updatedDate}</p>
          ) : (
            ""
          )}
        </span>
      </div>
    </>
  );
}
export default TodoItem;

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
