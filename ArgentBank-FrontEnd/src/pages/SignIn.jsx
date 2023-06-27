import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/features/loginSlice";
import {
  setUsername,
  setPassword,
  resetForm,
} from "../redux/features/formSlice";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.formFeature.username);
  const password = useSelector((state) => state.formFeature.password);
  
  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
    // console.log(userName);
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
    // console.log(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userName, password }),
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/login",
        request
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data.body.token);
      dispatch(loginSuccess(data.body.token));
      dispatch(resetForm());
      navigate("/user");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input onChange={handleUsernameChange} type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handlePasswordChange}
              type="password"
              id="password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
