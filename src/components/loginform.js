import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {
  const [username, setUserName] = useState([
    { id: 1, name: "admin", password: 123, admin: true },
    { id: 2, name: "admin1", password: 123, admin: true },
    { id: 3, name: "user", password: 123, admin: false },
    { id: 4, name: "user2", password: 123, admin: false },
  ]);

  const submit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <form>
        <input type="text" name="userName" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" onClick={submit} className="login-btn">
          Login
        </button>
      </form>
      <div>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
  );
};

export default LoginForm;
