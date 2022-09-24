import React from "react";
import LoginForm from "./components/loginform";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/userspages/admin";
import User from "./components/userspages/user";
import TodoListContextProvider from "./store/contexts/TodoListContext";

const App = () => {
  return (
    <>
      <TodoListContextProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </TodoListContextProvider>
    </>
  );
};

export default App;
