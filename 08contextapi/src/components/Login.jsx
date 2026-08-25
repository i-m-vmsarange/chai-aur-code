import React, { useState } from "react";
import UserContext from "../context/usercontext";
import { useContext } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    setUser(username);
  };
  return (
    <div>
      <input
        value={username}
        type="text"
        className="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        value={password}
        type="password"
        className="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
