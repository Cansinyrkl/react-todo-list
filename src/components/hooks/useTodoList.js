import { useContext } from "react";
import { TodoListContext } from "../../store/contexts/TodoListContext";

const useTodoList = () => {
  const todoLisData = useContext(TodoListContext);
  const todoList = todoLisData.todolist;
  const setTodoList = todoLisData.setTodoList;

  return [todoList, setTodoList];
};

export default useTodoList;
