import React, { useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "yumurta" },
    { id: 2, todo: "yumurta" },
    { id: 3, todo: "yumurta" },
  ]);

  const navigate = useNavigate();

  const [text, setText] = useState();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="admin-page">
        <div className="admin-cover">
          <h1>Todo List</h1>
          <ul className="todo-list">
            {todos.map((item) => {
              if (item.todo) {
                return <li>{item.todo}</li>;
              } else {
                return <li>{item}</li>;
              }
            })}
          </ul>

          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            id="todoInput"
            placeholder="Todo List"
          />

          <button
            type="submit"
            onClick={(e) => {
              setTodos([...todos, text]);
              setText("");
            }}
            className="admin-login-btn"
          >
            Add
          </button>
          <button type="button" onClick={handleClick}>
            Çıkış Yap
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
