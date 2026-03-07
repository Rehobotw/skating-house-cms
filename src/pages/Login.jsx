import React from "react";
import logo from "../assets/logo5.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [login,setLogin]=useState({
        email:"",
        password:""
      });
    
      const handleChange=(e)=>{
         console.log("handleChange called",e.target.name,e.target.value);
        const {name,value}=e.target;
        setLogin(prev=>({
          ...prev,
          [name]:value
        }));
      };
      const handleUpdate=(e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/api/auth",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(login)
        })
        .then((res)=>{
          if(!res.ok){
            throw new Error("Invalid credentials");
          }
          return res.json();
        })
        .then((data)=>{
          alert("Login Successful");
          navigate("/hero");
        })
        .catch((err)=>{
          console.log(err);
          alert("Login failed. Please check your email and password.");
        });
      };
 
  return (
    <div className="login">
      <img src={logo} alt="" width={"200px"} className="logo-img"/>
      <div className="form-container">
        <h1>Super Skate CMS</h1>
        <h2>Admin Login</h2>
        <div className="admin-input">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChange}
          />
        </div>
        <div className="admin-input">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleUpdate} className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
