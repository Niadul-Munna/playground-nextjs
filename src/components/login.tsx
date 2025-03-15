"use client";
import React, { FormEvent, useContext } from "react";
import UserContext from "@/context/user-context";

const Login = () => {
  const { setUser } = useContext<any>(UserContext);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="borde border-2 p-5 h-96 w-96 m-10 ">
      <h1 className="text-2xl mb-8 font-semibold text-center">Login</h1>
      <div className="flex flex-col gap-4">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
          type="text"
          placeholder="Enter username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
          type="password"
          placeholder="Enter password"
        />
        <button
          className="border cursor-pointer bg-blue-400 rounded-2xl px-4 py-1"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
