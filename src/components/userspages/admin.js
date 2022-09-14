import React from "react";
import "./admin.css";

const list = ["Elma", "Armut", "Kel Mahmut", "Kel Hasan"];
list.push("Hasan", "Hüsso");

document.getElementById("deneme").innerHTML = list;

const Admin = () => {
  return (
    <>
      <div className="admin-page">
        <div className="admin-cover">
          <h1>Todo List</h1>
          <ul className="todo-list">
            <li id="deneme"></li>
          </ul>

          <input type="text" id="todoInput" placeholder="Todo List" />

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
