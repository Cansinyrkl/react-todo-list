import React, { useState } from "react";
import "./loginform.css";
import admin from "./userspages/admin";

const LoginForm = () => {
  const [username, setUserName] = useState([
    { id: 1, name: "admin", password: "123", admin: true },
    { id: 2, name: "admin1", password: "123", admin: true },
    { id: 3, name: "user", password: "123", admin: false },
    { id: 4, name: "user2", password: "123", admin: false },
  ]);

  const [userDatasHolder, setUserDatasHolder] = useState();
  const [passawordDatasHolder, setPasswordDatasHolder] = useState();

  const userDataHolder = (e) => {
    const userNameValue = e.target.value;
    setUserDatasHolder(userNameValue);
  };
  const passawordDataHolder = (e) => {
    const passawordValue = e.target.value;
    setPasswordDatasHolder(passawordValue);
  };

  const btnClick = () => {
    const userNa = username.map((item) => item.name);
    const userPa = username.map((item) => item.password);

    const Us = userNa.includes(userDatasHolder);
    const Pa = userPa.includes(passawordDatasHolder);

    if (Us && Pa) {
      console.log("başarılı");
    } else {
      console.log("başarısız");
    }
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <form className="form-container">
        <input
          type="text"
          name="userName"
          placeholder="username"
          onChange={userDataHolder}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={passawordDataHolder}
        />
      </form>
      <button type="submit" onClick={btnClick} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
