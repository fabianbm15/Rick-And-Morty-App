import "./Form.css";
import React, { useState } from "react";
import validate from "./validate";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="username">
          <label>Username: </label>
          <input
            className={errors.username && "warning"}
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={(e) => handleInputChange(e)}
          />
          <p className="danger">{errors.username}</p>
        </div>
        <div className="password">
          <label>Password: </label>
          <input
            className={errors.password && "warning"}
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => handleInputChange(e)}
          />
          <p className="danger">{errors.password}</p>
        </div>
        {/* {Object.keys(errors).length === 0 ? (
          <button className="loginButton" type="submit">
            Log In
          </button>
        ) : null} */}
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
