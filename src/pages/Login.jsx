import React from "react";
import logo from "../assets/logo.jpg";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" width={"200px"} />
      <div className="form-container">
        <h1>Super Skate CMS</h1>
        <h2>Admin Login</h2>
        <div className="admin-input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="admin-input">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <a href="">
          <button className="login-btn">Login</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
