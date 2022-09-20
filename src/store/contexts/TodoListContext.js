<<<<<<< HEAD
import React, { createContext } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "yumurta" },
    { id: 2, todo: "yumurta" },
    { id: 3, todo: "yumurta" },
  ]);
};

return (
  <TodoListContext.Provider value={{ todos, setTodos }}>
    {children}
  </TodoListContext.Provider>
);

export default TodoListContextProvider;
=======
import React from 'react'

const TodoListContext = () => {
  return (
    <div>TodoListContext</div>
  )
}

export default TodoListContext
>>>>>>> 7cc92392ff1cbcdf69f8a439894cd314089234b9
