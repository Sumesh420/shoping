import React, { useState } from "react";
import "../../App.css";
import BreadCrumb from "./BreadCrumb";
import Footer from "../layout/Footer";
import TopHeader from "../layout/header/TopHeader";
import SearchPanel from "../layout/header/SearchPanel";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    onLogin();

    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );

    navigate("/dashboard");
  };

  const paths = [
    {
      name: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      name: "Login",
      url: "/login",
      icon: "fa fa-info-circle",
    },
    {
      name: " ",
      url: " ",
      icon: " ",
    },
  ];

  return (
    <div>
      <TopHeader />
      <SearchPanel />
      <BreadCrumb paths={paths} />
      <div className="login-container">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
