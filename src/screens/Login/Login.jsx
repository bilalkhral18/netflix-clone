import React, { useState } from "react";
import icons from "../../assets/js/icons";
import "./Login.css";
const Login = () => {
  const [state, setState] = useState("Sign In");
  const handleSignUp = () => {
    setState("Sign Up");
  };
  const handleSignIn = () => {
    setState("Sign In");
  };
  return (
    <div className="login">
      <img src={icons.logo} alt="netflix logo" />
      <div className="logincontent">
        <div className="loginform">
          <h2>{state}</h2>
          {state !== "Sign In" && (
            <input type="text" name="userName" placeholder="Your name" />
          )}
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>{state}</button>
        </div>
        <div className="needhelp">
          <div className="rememberme">
            <input type="checkbox" name="Remember Me" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        <div className="links">
          {state === "Sign In" ? (
            <p className="signUpLink" onClick={handleSignUp}>
              New to Netflix? <span>Sign Up Now</span>
            </p>
          ) : (
            <p className="signInLink" onClick={handleSignIn}>
              Already have account? <span>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
