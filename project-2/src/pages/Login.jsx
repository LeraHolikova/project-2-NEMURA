import React from "react";
import "./register-log.css";
import Link from "react-router-dom";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[1].value;
    const password = e.target[2].value;
  };
  return (
    <div className="form-container">
      <div className="form-wraper">
        <span className="logo">Muly chat</span>
        <span className="title">Login</span>
        <form>
          <input type="eamil" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </form>
        <p>Not Registered yet ? Register</p>
      </div>
    </div>
  );
};

export default Login;
