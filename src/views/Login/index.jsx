import React, { useState } from "react";

import Wallet from "@images/wallet.svg";

import "@sass/views/_login.scss";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../../utils/util";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const onUsernameInputChange = (e) => {
    setError({});
    setUsername(e.target.value);
  };

  const onPasswordInputChange = (e) => {
    setError({});
    setPassword(e.target.value);
  };

  const validateInput = () => {
    let error = {};
    if (username === "") {
      error["username"] = "Username is required";
    }
    if (password === "") {
      error["password"] = "Password is required";
    }

    setError(error);
    setCanSubmit(true);
  };

  const submitForm = () => {
    validateInput();

    if (!canSubmit) {
      return;
    }

    //Currently not implementing in the backend
    let error = {};
    if (username !== "manish" || password != "12345678") {
      error["login"] = "Invalid username or password";
      setError(error);
      setCanSubmit(false);
      return;
    }

    saveToLocalStorage("isLoggedIn", true);
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <div className="Login__logo">
          <img src={Wallet} alt="wallet" />
        </div>
        <div className="Login__body">
          <h2>The Wallet Project</h2>
          {error.login ? (
            <span className="Login__error">{error.login}</span>
          ) : null}
          <div className="Login__row">
            <p>Username</p>
            <input
              type="text"
              name="username"
              id="username"
              onChange={onUsernameInputChange}
            />
            {error.username ? (
              <span className="Login__error">{error.username}</span>
            ) : null}
          </div>
          <div className="Login__row">
            <p>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onPasswordInputChange}
            />
            {error.password ? (
              <span className="Login__error">{error.password}</span>
            ) : null}
          </div>
          <div className="Login__button">
            <button onClick={submitForm}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
