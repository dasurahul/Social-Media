import React from "react";
import facebook from "./facebook.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <div className="title">
          <h1 className="center black">Social Media App</h1>
        </div>
        <form>
          <input className="input" type="email" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <button className="button">Log in</button>
        </form>
        <p className="center gray mb-4">OR</p>
        <div className="row content-center mb-4">
          <div className="icon-container">
            <img className="icon" src={facebook} alt="facebook icon" />
          </div>
          <div className="facebook-color bold pointer">
            Log in with Facebook
          </div>
        </div>
        <div className="center black mb-2">
          Don't have an account?{" "}
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
