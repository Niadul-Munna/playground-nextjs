"use client";
import React, { useContext } from "react";
import UserContext from "@/context/user-context";

const Profile = () => {
  const { user } = useContext<any>(UserContext);
 if (!user) return <div className="bg-red-300 p-1">Please Login</div>;
  else
    return (
      <div className="bg-green-400 px-3 py-1.5">
        Welcome <span className="uppercase font-bold">{user.username},</span>
      </div>
    );
};

export default Profile;
