"use client";
import React, { ReactNode } from "react";
import UserContext from "@/context/user-context";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
