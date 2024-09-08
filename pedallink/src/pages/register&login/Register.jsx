import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./Register.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";
import { Navigate } from "react-router-dom";
const Register = ({user}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const register = () => {
    setIsLogin(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Username,setUserName] = useState("");

  const handleSignUp = ()=>{
    if(!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  };
  const handleSignIn= () =>{
    if(!email || !password) return;
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  }
if(user){
  return <Navigate to ='/home' />
}
  return (
    <div className="bg" >
      
       <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo flex justify-center">
          <p>PedalLink.</p>
        </div>
      </nav>

      <div className="form-box">
        {/* Login Form */}
        <div
          className="login-container"
          id="login"
          style={{ left: isLogin ? "4px" : "-510px", opacity: isLogin ? 1 : 0 }}
        >
          <div className="top">
            <span>
              Don't have an account?{" "}
              <a href="#" onClick={register}>
                Sign Up
              </a>
            </span>
            <header>Login</header>
          </div>
          <div className="input-box p-3 ">
            <input
              type="text"
              className="input-field"
              placeholder="Username or Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box relative p-3">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field w-full px-0 py-2 text-lg text-white bg-transparent border-b-2 border-white outline-none focus:border-[#03f484] transition-colors"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer pr-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEye color="white" />
              ) : (
                <FaEyeSlash color="white" />
              )}
            </div>
          </div>
          <div className="input-box">
            <input
              type="submit"
              className="submit"
              value="Sign In"
              onClick={handleSignIn}
            />
          </div>
        </div>

        {/* Registration Form */}
        <div
          className="register-container"
          id="register"
          style={{
            right: isLogin ? "-520px" : "5px",
            opacity: isLogin ? 0 : 1,
          }}
        >
          <div className="top">
            <span>
              Have an account?{" "}
              <a href="#" onClick={login}>
                Login
              </a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box w-[700px] p-3">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
              />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box p-3">
            <input type="text" className="input-field" placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}} />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box relative p-3">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field w-full px-0 py-2 text-lg text-white bg-transparent border-b-2 border-white outline-none focus:border-[#03f484] transition-colors"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer pr-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEye color="white" />
              ) : (
                <FaEyeSlash color="white" />
              )}
            </div>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register"
          onClick={handleSignUp} />
          </div>
        </div>
      </div>
    </div></div>
   
  );
};

export default Register;
