import React, { createContext, useState } from "react";

export const UserListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const [userdatas, setUserDatas] = useState([
    { id: 1, name: "admin", password: "123", admin: true },
    { id: 2, name: "admin1", password: "123", admin: true },
    { id: 3, name: "user1", password: "123", admin: false },
  ]);

  return (
    <UserListContext.Provider value={{ userdatas, setUserDatas }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
