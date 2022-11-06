import React, { useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import { Link } from "react-router-dom";

const Register = (props) => {
  const { user, setUser } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      await axios
        .post("/api/auth/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          setUser(res.data);
          console.log(user);
          alert("created please login");
        });
    } catch (err) {
      alert(err.response.data);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <span className="formTitle">Register</span>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submitButton">
          Login
        </button>
        <Link to="/">already user? login</Link>
      </form>
    </div>
  );
};

export default Register;
