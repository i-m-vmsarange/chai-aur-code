import React from "react";
import UserContext from "../context/usercontext.js";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return "User does not exist";
  return `Welcome ${user}`;
};

export default Profile;
