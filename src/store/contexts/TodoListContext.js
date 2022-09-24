import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "yumurta" },
    { id: 2, todo: "yumurta" },
    { id: 3, todo: "yumurta" },
  ]);

  return (
    <TodoListContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
