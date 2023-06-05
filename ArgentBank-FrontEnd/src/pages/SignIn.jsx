import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/features/loginSlice";
import { resetForm } from "../redux/features/formSlice";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = useSelector((state) => state.formFeature.userName);
    const password = useSelector((state) => state.formFeature.password);
    const request = {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({ userName, password }),
    };

    const response = await fetch(
      "http://localhost:3001/api/v1/user/login",
      request
    );
    const data = await response.json();

    if (response.ok) {
      dispatch(loginSuccess(data));
      dispatch(resetForm());
      navigate("/user");
    } else console.error(error);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
