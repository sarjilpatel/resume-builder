import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = (props) => {
  const {
    user,
    setUser,
    setIsAuthenticated,
    isAuthenticated,
    resume,
    setResume,
  } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    const headers = {
      "Content-Type": "application/json",
    };
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/auth/login",
          {
            username,
            password,
          },
          headers
        )
        .then((res) => {
          setUser(res.data);
          setIsAuthenticated(true);
          setResume(res.data.resume);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <span className="formTitle">Login</span>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submitButton">
          Login
        </button>
        <Link to="/register">new User?</Link>
      </form>
    </div>
  );
};

export default Login;
