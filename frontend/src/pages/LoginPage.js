import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Form from "../hooks/Form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { email: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = Form(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <h3>
        <b>
          <i>Login</i>
        </b>{" "}
        to view your personalized experience
      </h3>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p><label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
        </label></p>
        <p><label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
        </label></p>
        {isServerError ? (
          <p className="error">Login failed. Incorrect credentials.</p>
        ) : null}
        <p><Link className="bodyLink" to="/register">Sign Up</Link></p>
        <p><button type="submit">Login</button></p>
      </form>
    </div>
  );
};

export default LoginPage;
